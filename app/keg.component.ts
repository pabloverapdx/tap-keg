import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

// this is the Grandchild now //


@Component({
  selector: 'keg-display', // display  keg model
  inputs: ['keg'],
  template: `
  <h3>{{ keg.beerName }}</h3>
  `

})

export class kegComponent {
  public keg: Keg;
}

// this component above was added 3rd after parent and child
