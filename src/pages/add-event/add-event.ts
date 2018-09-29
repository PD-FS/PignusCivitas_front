import { EventStatusesProvider } from './../../providers/event-statuses/event-statuses';
import { EventTypesProvider } from './../../providers/event-types/event-types';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';

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
        contact_name: null,
        contact_phone: null,
        community_id: 1,
        security_agent_id: 1
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
        contactName: [''],
        contactPhone: [''],

    });

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private eventTypesProvider: EventTypesProvider,
        private formBuilder: FormBuilder,
        private eventStatusesProvider: EventStatusesProvider,
        private imagePicker: ImagePicker) {
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
        const options = {
            quality: 80,
            maximumImagesCount: 1
        };
        this.imagePicker.getPictures(options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
            }
        }, (err) => { });
    }

    public save(): void {
        this.saved = true;
        console.log(this.event);
    }

}
