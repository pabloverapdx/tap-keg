import { Component, EventEmitter } from 'angular2/core';
import { kegComponent } from './keg.component';
import { Keg } from './keg.model';

// this is the child now //

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [kegComponent],
  template: `
  <keg-display *ngFor="#currentKeg of kegList"(click)="kegClicked(currentKeg)"
  [class.selected]="currentKeg === selectedKeg" [keg]="currentKeg"> </keg-display>
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
