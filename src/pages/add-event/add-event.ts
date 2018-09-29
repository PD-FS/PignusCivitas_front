import { EventTypesProvider } from './../../providers/event-types/event-types';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventsProvider } from './../../providers/events/events';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-add-event',
    templateUrl: 'add-event.html',
})
export class AddEventPage {

    public event = {
        id: null,
        event_type_id: null
    };

    public eventTypes: Array<any>;

    public formulario: FormGroup = this.formBuilder.group({
        eventType: ['', Validators.required]
    });

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private eventsProvider: EventsProvider,
        private eventTypesProvider: EventTypesProvider,
        private formBuilder: FormBuilder) {
        this.eventTypesProvider.eventTypesList().subscribe(
            (data) => {
                this.eventTypes = data;
                console.log(data);
            }
        );
    }

    public eventTypeSelected($event): void {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddEventPage');
    }

    public attachImage() {

    }

}
