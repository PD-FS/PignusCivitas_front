import { AddEventPage } from './../add-event/add-event';
import { EventTypesProvider } from './../../providers/event-types/event-types';
import { SecurityProvider } from './../../providers/security/security';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventsProvider } from '../../providers/events/events';
import { EventTypeIcons, PignusIcon } from '../../providers/events/eventTypeIcons';
/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-inbox',
    templateUrl: 'inbox.html'
})
export class InboxPage {

    public actualrole: number;
    public items: Array<any>;
    public eventList: Array<any>;
    public eventTypes: Array<any>;
    public selectedEventType: number;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private security: SecurityProvider,
        private eventsProvider: EventsProvider,
        private eventTypesProvider: EventTypesProvider) {
        this.eventsProvider.eventList().subscribe(
            (data) => {
                this.items = data;
                this.eventList = data;
            }
        );

        this.eventTypesProvider.eventTypesList().subscribe(
            (data) => {
                this.eventTypes = data;
                this.eventTypes.unshift({ id: 0, name: "Todos los eventos" });
                this.selectedEventType = 0;
            }
        );
    }

    public getIcon(eventType: number): PignusIcon {
        const eventTypeIcons = new EventTypeIcons();
        return eventTypeIcons.getIcon(eventType);
    }

    public getImage(item: any): string {
        if (item.image) {
            return item.image;
        }
        return 'assets/imgs/pignus_icon.png';
    }

    ionViewDidLoad() {
        this.actualrole = this.security.getRole();

    }

    itemTapped() {

    }

    public compareEventFn(event1: any, event2: any) {
        return event1 && event2 ? event1.id === event2.id : event1 === event2;
    }

    public eventTypeSelected($event: any) {
        if (this.selectedEventType === 0) {
            this.items = this.eventList;
            return;
        }
        this.items = [];
        this.eventList.forEach(
            (event) => {
                if (this.selectedEventType === event.event_type_id) {
                    this.items.push(event);
                }
            }
        );
    }

    public addEvent() {
        this.navCtrl.push(AddEventPage);
    }
}
