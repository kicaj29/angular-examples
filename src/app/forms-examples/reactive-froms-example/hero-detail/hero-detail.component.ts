import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address, Hero, states } from './../data-model';
import { HeroService } from '../hero.service';
import { MySuperControlValue } from '../my-super-control/my-super-control.component';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnChanges {

  heroForm: FormGroup;
  @Input() hero: Hero;
  states = states;
  nameChangeLog: string[] = [];

  constructor(private fb: FormBuilder, private heroService: HeroService) {
/*    this.hero = new Hero();
    this.hero.name = "Super hero!!!";
    this.hero.addresses = [];*/
    this.createForm();
    this.logNameChange();
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
      sidekick: '',
      heroIdAndName: new MySuperControlValue()
    });
  }

  /**Angular calls this method whenever @Input() hero changes its value.*/
  ngOnChanges() {
    console.log("HeroDetailComponent: ngOnChanges");
    let idAndName = new MySuperControlValue();
    idAndName.value1 = this.hero.id.toString();
    idAndName.value2 = this.hero.name;

    this.heroForm.reset({
      heroName: this.hero.name,
      address: this.hero.addresses[0] || new Address(),
      heroIdAndName: idAndName
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

  logNameChange() {
    const nameControl = this.heroForm.get('heroName');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }

  onSubmit() {
    this.hero = this.prepareSaveHero();
    this.heroService.updateHero(this.hero).subscribe(/* error handling */);
    this.ngOnChanges();
  }

  revert() { this.ngOnChanges(); }

  prepareSaveHero(): Hero {
    const formModel = this.heroForm.value;

    // deep copy of form model lairs
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveHero: Hero = {
      id: this.hero.id,
      name: formModel.heroName as string,
      //addresses: formModel.secretLairs // <-- bad!!! we do not want let leak to outside instance used in view model
       addresses: secretLairsDeepCopy
    };
    return saveHero;
  }

}
