import { SecurityAgentsProvider } from './../../providers/security-agents/security-agents';
import { EventsProvider } from './../../providers/events/events';
import { EventStatusesProvider } from './../../providers/event-statuses/event-statuses';
import { EventTypesProvider } from './../../providers/event-types/event-types';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ImagePicker, OutputType } from '@ionic-native/image-picker';
import { PeopleProvider } from '../../providers/people/people';

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

    public title = "Nuevo evento";
    public formatDate = 'YYYY-MM-DDTHH:mm:ssTZD';

    // Indica si se esta consultando un evento
    public readonlyEvent: boolean = false;

    public event: any;

    public saved: boolean = false;

    public eventTypes: Array<any>;

    public eventStatuses: Array<any>;

    public securityAgentName: string;

    public formulario: FormGroup = this.formBuilder.group({
        eventType: ['', Validators.required],
        title: ['', Validators.required],
        notes: [''],
        site: [''],
        eventStatus: [''],
        endDate: [''],
        contactName: [''],
        contactPhone: [''],
        reportedBy: [{value:'', disabled: true}]

    });

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private eventTypesProvider: EventTypesProvider,
        private eventsProvider: EventsProvider,
        private toastCtrl: ToastController,
        private formBuilder: FormBuilder,
        private eventStatusesProvider: EventStatusesProvider,
        private imagePicker: ImagePicker,
        private securityAgentProvider: SecurityAgentsProvider,
        private peopleProvider: PeopleProvider) {
            
        this.initEvent();
        this.getSecurityAgentName(this.event.security_agent_id);
        this.readonlyEvent = false;
        const eventId = this.navParams.get('eventId');
        const readOnlyMode = this.navParams.get('readOnlyMode');
        if (readOnlyMode === true) {
            this.readonlyEvent = true;
            this.formulario.disable();
        }
        if (eventId) {
            this.eventsProvider.getEvent(eventId).subscribe(
                (data) => {
                    this.event = data;
                    this.title = data.title;
                    console.log(data.image);
                }
            );
        }


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
    
    private initEvent() {
        this.event = {
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
            security_agent_id: 1,
            image: null
        };
    }


    public eventTypeSelected($event): void {

    }

    ionViewDidLoad() {

    }

    public attachImage(): void {
        const options = {
            maximumImagesCount: 1,
            width: 800,
            height: 800,
            quality: 80,
            outputType: OutputType.DATA_URL
        };
        this.imagePicker.getPictures(options).then((results) => {
            this.event.image = null;
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                this.event.image = results[i];
                break;
            }
        }, (err) => { });
    }

    public save(): void {
        this.saved = true;
        if (!this.formulario.valid) {
            return;
        }
        console.log(this.event);
        this.eventsProvider.saveEvent(this.event).subscribe(
            (data) => {
                const toast = this.toastCtrl.create({
                    message: 'Evento guardado!',
                    duration: 3000,
                    position: 'top',
                    showCloseButton: true,
                    closeButtonText: 'x'
                });
                toast.present();
                this.navCtrl.pop();
            }
        );
    }

    public back() {
        this.navCtrl.pop();
    }

    private getSecurityAgentName(securityAgentId: number): void {
        this.securityAgentProvider.getSecurityAgent(securityAgentId).subscribe(
            (data) => {
                this.getPersonName(data.person_id);
            }
        );
    }

    private getPersonName(personId: number): void {
        this.peopleProvider.getPerson(personId).subscribe(
            (data) => {
                this.securityAgentName = data.first_name + ' ' + data.last_name;
            }
        );
    }

}
