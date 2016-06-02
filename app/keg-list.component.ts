import { Component, EventEmitter } from 'angular2/core';
import { kegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';

// this is the child now //

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [kegComponent, EditKegDetailsComponent],
  template: `
  <keg-display *ngFor="#currentKeg of kegList"(click)="kegClicked(currentKeg)"
  [class.selected]="currentKeg === selectedKeg" [keg]="currentKeg"> </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg-details>
  `
  // === tells Angular to either add or remove class the class selected
  // You need the word OF in currentKeg of kegList //
  // *ngFor is a directive //
  // this component above went from <h3> to <keg-display> because it is grabbing it from the Grandchild //
  // edit-keg details comes from the edit keg details component file
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
