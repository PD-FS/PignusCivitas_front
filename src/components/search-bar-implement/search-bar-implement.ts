import { Component } from '@angular/core';

/**
 * Generated class for the SearchBarImplementComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-bar-implement',
  templateUrl: 'search-bar-implement.html'
})
export class SearchBarImplementComponent {

  text: string;

  constructor() {
    console.log('Hello SearchBarImplementComponent Component');
    this.text = 'Hello World';
  }

}
