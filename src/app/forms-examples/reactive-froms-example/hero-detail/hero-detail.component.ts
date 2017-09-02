import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address, Hero, states } from './data-model';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  heroForm: FormGroup;
  hero: Hero;
  states = states;

  constructor(private fb: FormBuilder) {
    this.hero = new Hero();
    this.hero.name = "Super hero!!!";
    this.hero.addresses = [];
    this.createForm();
    this.heroForm.patchValue({
      heroName: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }

  createForm() {
    this.heroForm = this.fb.group({
      heroName: ['', Validators.required ], // <--- the FormControl called "heroName"
      address: this.fb.group(new Address()),
      power: '',
      sidekick: ''
    });
  }

  ngOnInit() {
  }

}
