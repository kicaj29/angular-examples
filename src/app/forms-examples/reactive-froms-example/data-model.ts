export class Hero {
  id = 0;
  name = '';
  addresses: Address[];
  gender = '';
  favoriteNumber = 100;

}

export class Address {
  street = '';
  city   = '';
  state  = '';
  zip    = '';
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Whirlwind',
    gender: 'Male',
    favoriteNumber: 23,
    addresses: [
      {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
      {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
    ]
  },
  {
    id: 2,
    name: 'Bombastic',
    gender: 'Female',
    favoriteNumber: 43,
    addresses: [
      {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
    ]
  },
  {
    id: 3,
    name: 'Magneta',
    gender: 'Female',
    favoriteNumber: 57,
    addresses: [ ]
  },
];

export const states = ['CA', 'MD', 'OH', 'VA'];
