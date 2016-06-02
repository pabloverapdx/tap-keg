import { Component, EventEmitter } from 'angular2/core';
import { kegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

// this line was here from the very beggining //
// EventEmitter lets components share information - talk to each other //

// all the info in here was done first. after cloning project template // Start with parent and then child. They are not in order in here thought //

// To summarize, to add a child component to a parent component, we need to follow these steps:

// Create the child component's @Component decorator and Controller class.
// If the component needs to receive data from a parent component, define an input for it and an accompanying property to store the input in

// *********************************************************************************
                                        // Grandchild //

// **************************************************************************************************************** //
                                        // CHILD COMPONENT ///
// Made this component after parent //



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
