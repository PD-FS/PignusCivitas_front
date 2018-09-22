import { Component, Input } from '@angular/core';

/**
 * Generated class for the ValidationMessagesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'validation-messages',
    templateUrl: 'validation-messages.html'
})
export class ValidationMessagesComponent {

    @Input('form')
    form: any;

    @Input('field')
    field: string;

    @Input('saved')
    saved: boolean;

    constructor() {
    }

}
