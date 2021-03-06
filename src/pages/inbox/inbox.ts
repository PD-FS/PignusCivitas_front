import { AddEventPage } from './../add-event/add-event';
import { EventTypesProvider } from './../../providers/event-types/event-types';
import { SecurityProvider } from './../../providers/security/security';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventsProvider } from '../../providers/events/events';
import { EventTypeIcons, PignusIcon } from '../../providers/events/eventTypeIcons';
import { LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
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
    private loader;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private security: SecurityProvider,
        private eventsProvider: EventsProvider,
        public loadingCtrl: LoadingController,
        private eventTypesProvider: EventTypesProvider,
        private auth: AngularFireAuth) {
        this.getEventList();

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

    private getEventList(): void {
        this.presentLoading();
        this.eventsProvider.eventList().subscribe(
            (data) => {
                this.items = data;
                this.eventList = data;
                this.eventTypeSelected();
                this.loader.dismiss();
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

    ionViewWillLoad() {
      this.auth.authState.subscribe(data => {
        if(!data) {
          this.navCtrl.setRoot('LoginPage');
        }
      })
    }

    ionViewDidLoad() {
        this.actualrole = this.security.getRole();

    }

    itemTapped($event: any, item: any) {
        this.navCtrl.push(AddEventPage, {
            eventId: item.id,
            readOnlyMode: true
        });
    }

    public compareEventFn(event1: any, event2: any) {
        return event1 && event2 ? event1.id === event2.id : event1 === event2;
    }

    public eventTypeSelected() {
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

    public refresh() {
        this.getEventList();
    }

    presentLoading() {
        this.loader = this.loadingCtrl.create({
            duration: 30000
        });
        this.loader.present();
      }
}
