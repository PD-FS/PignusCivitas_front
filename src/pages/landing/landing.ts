import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';


import { InboxPage } from '../inbox/inbox';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

  constructor(public navCtrl: NavController, private storage: Storage, public platform: Platform) {

  }

  pushPage(page) {

    this.storage.set('page', page);
    this.platform.ready().then( (p) => {
      this.storage.get('page').then( (val) => {
        if(page == val){
          this.navCtrl.setRoot(InboxPage);
        }
      });
    });

  }

}
