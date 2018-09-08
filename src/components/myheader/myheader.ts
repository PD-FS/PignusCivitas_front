import { Component, Input } from '@angular/core';

/**
 * Generated class for the MyheaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'myheader',
  templateUrl: 'myheader.html'
})
export class MyheaderComponent {

    @Input()
    public title: string = 'Title header';

  constructor() {}

}
