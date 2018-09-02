import { SecurityProvider } from './../../providers/security/security';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LandingPage } from '../landing/landing';
import { RoleService } from '../../common/services/role.service'
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
  templateUrl: 'inbox.html',
  providers: [
    RoleService
  ]
})
export class InboxPage {

  actualrole:number;
  items: Array<Event>;

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

  public getImage(community_id: number): string {
    return 'assets/imgs/pignus_icon.png';
  }

  ionViewDidLoad() {

    this.security.getRole().then((val) => {
      if(val != null){
        console.log("Value in Storage : ", val)
        this.actualrole = val;
      }
      else{
        console.log("Null or Undefined value err :", val)
        this.navCtrl.setRoot(LandingPage);
      }}, (err) => {
        console.log("Storage error : ", err)
      })

  }

  itemTapped(){

  }



}
