import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address, Hero, states } from './../data-model';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnChanges {

  heroForm: FormGroup;
  @Input() hero: Hero;
  states = states;

  constructor(private fb: FormBuilder) {
/*    this.hero = new Hero();
    this.hero.name = "Super hero!!!";
    this.hero.addresses = [];*/
    this.createForm();
/*    this.heroForm.patchValue({
      heroName: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });*/
  }

  createForm() {
    this.heroForm = this.fb.group({
      heroName: ['', Validators.required ], // <--- the FormControl called "heroName"
      address: this.fb.group(new Address()),
      secretLairs: this.fb.array([]), // <-- secretLairs as an empty FormArray
      power: '',
      sidekick: ''
    });
  }

  /**Angular calls this method whenever @Input() hero changes its value.*/
  ngOnChanges() {
    console.log("HeroDetailComponent: ngOnChanges");
    this.heroForm.reset({
      heroName: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
    this.setSecretLairs(this.hero.addresses);
  }

  setSecretLairs(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  };

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  removeLair(index) {
    this.secretLairs.removeAt(index);
  }

}
