import { EventStatusesProvider } from './../../providers/event-statuses/event-statuses';
import { EventTypesProvider } from './../../providers/event-types/event-types';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePipe } from '@angular/common';

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

    public formatDate = 'YYYY-MM-DDTHH:mm:ssTZD';

    

    public event = {
        id: null,
        event_type_id: 1,
        title: null,
        notes: null,
        site: null,
        event_status_id: 1,
        end_date: new Date().toISOString(),

    };

    public saved: boolean = false;

    public eventTypes: Array<any>;

    public eventStatuses: Array<any>;

    public formulario: FormGroup = this.formBuilder.group({
        eventType: ['', Validators.required],
        title: ['', Validators.required],
        notes: [''],
        site: [''],
        eventStatus: [''],
        endDate: [''],


    });

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private eventTypesProvider: EventTypesProvider,
        private formBuilder: FormBuilder,
        private eventStatusesProvider: EventStatusesProvider,
        private datePipe: DatePipe) {
        this.eventTypesProvider.eventTypesList().subscribe(
            (data) => {
                this.eventTypes = data;
            }
        );

        this.eventStatusesProvider.eventStatusesList().subscribe(
            (data) => {
                this.eventStatuses = data;
            }
        );
    }

    public eventTypeSelected($event): void {

    }

    ionViewDidLoad() {

    }

    public attachImage(): void {

    }

    public save(): void {
        this.saved = true;
        console.log(this.event);
    }

}
