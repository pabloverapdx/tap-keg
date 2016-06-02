import { Component } from 'angular2/core'; // this line was here from the very beggining //

// all the info in here was done first. after cloning project template // Start with parent and then child. They are not in order in here thought //

// **************************************************************************************************************** //
                                        // CHILD COMPONENT ///
// Made this component after parent //

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  template: `
  <h3 *ngFor="#currentKeg of kegList"(click)="kegClicked(currentKeg)"> {{currentKeg.beerName}}</h3>
  `
  // You need the word OF in currentKeg of kegList //
  // *ngFor is a directive //
})

export class kegListComponent {
  public kegList: Keg[];
  kegClicked(clickedKeg: Keg): void{ // click event for child
    console.log(clickedKeg);
  }
}

// *************************************************************************************************************** //
                                      // PARENT COMPONENT ///

// Made this component first //

@Component({ // parent component
  selector: 'my-app',
//   template: `
// <div class="container">
//   <h1> Tap a Keg </h1>
//   <h3 *ngFor="#keg of kegs"(click)="kegWasSelected(keg)"> {{keg.beerName}}</h3>
//   `
// this four lines above might have been optional.
  directives: [kegListComponent],
  template: `
   <div class="container">
   <h1> Tap a Keg </h1>
   <keg-list [kegList]="kegs"></keg-list>
  `
  //the "kegs" word in here is coming from the public kegs: in the export class below //
   // kegLIst came from above in the children component //
})

export class AppComponent { // parent class definition
  public kegs: Keg[];  // change Keg to empty array // update keg to kegs becuase it is an array of kegs now //
  constructor() {
    this.kegs = [
    new Keg("Ninkasi", 0),  // In here you would add more kegs //
    new Keg("Deschutes", 1),
    new Keg("Double Mountain", 2),
    new Keg("Crux", 3),
    ];
  }
  kegWasSelected(clickedKeg: Keg): void{ // This is a built in click event //
    console.log(clickedKeg);
  }
}

export class Keg {
  public done: boolean = false;
  constructor(public beerName: string, public id: number) {

  }
}
