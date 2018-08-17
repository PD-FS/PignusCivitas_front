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

  pushPage(role) {

    this.storage.set('role', role);
    this.platform.ready().then( (p) => {
      this.storage.get('role').then( (val) => {
        if(role == val){
          this.navCtrl.setRoot(InboxPage);
        }
      });
    });

  }

}
