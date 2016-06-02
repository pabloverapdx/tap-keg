import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
<div class="container">
  <h1> Tap a Keg </h1>
  <h3 *ngFor="#keg of kegs"> {{keg.beerName}}</h3>
  `
  // keg OF kegs. You need the word of or otherwise it won't work //
  // This h3 started without the ngFor. It was added later to go through all the kegs //
  // *ngFor is a directive //
})

export class AppComponent {
  public kegs: Keg[];  // change Keg to empty array // update keg to kegs becuase it is an array of kegs now //
  constructor() {
    this.kegs = [
    new Keg("Ninkasi", 0),  // In here you would add more kegs //
    new Keg("Deschutes", 1),
    new Keg("Double Mountain", 2),
    new Keg("Crux", 3),
    ];
  }
}

export class Keg {
  public done: boolean = false;
  constructor(public beerName: string, public id: number) {

  }
}
