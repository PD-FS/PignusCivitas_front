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

  actualrole:number;
  items: Array<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private security: SecurityProvider,
              private eventsProvider: EventsProvider) {
    this.eventsProvider.eventList().subscribe(
      (data) => {
        this.items = data;
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

  itemTapped(){

  }



}
