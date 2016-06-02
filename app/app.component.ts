import { Component, EventEmitter } from 'angular2/core'; // this line was here from the very beggining //
// EventEmitter lets components share information - talk to each other //

// all the info in here was done first. after cloning project template // Start with parent and then child. They are not in order in here thought //

// To summarize, to add a child component to a parent component, we need to follow these steps:

// Create the child component's @Component decorator and Controller class.
// If the component needs to receive data from a parent component, define an input for it and an accompanying property to store the input in

// *********************************************************************************
                                        // Grandchild //
@Component({
  selector: 'keg-display', // display  keg model
  inputs: ['keg'],
  template: `
  <h3>{{ keg.beerName }}</h3>
  `
  // this component above was added 3rd after parent and child
})

export class kegComponent {
  public keg: Keg;
}
// **************************************************************************************************************** //
                                        // CHILD COMPONENT ///
// Made this component after parent //

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [kegComponent],
  template: `
  <keg-display *ngFor="#currentKeg of kegList"(click)="kegClicked(currentKeg)"
  [class.selected]="currentKeg === selectedKeg"> {{currentKeg.beerName}}</keg-display>
  `
  // === tells Angular to either add or remove class the class selected
  // You need the word OF in currentKeg of kegList //
  // *ngFor is a directive //
  // this component above went from <h3> to <keg-display> because it is grabbing it from the Grandchild //
})

export class kegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void { // click event for child
    console.log('child', 'clickedKeg');
    this.selectedKeg = clickedKeg; // this line was added to select kegs and change their font color //
    this.onKegSelect.emit(clickedKeg);
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
   <keg-list [kegList]="kegs" (onKegSelect)="kegWasSelected($event)">
   </keg-list>
  `
  // ( ) mean output from the component. [ ] mean input from the component
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
