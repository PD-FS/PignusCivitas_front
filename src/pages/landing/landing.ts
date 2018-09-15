import { SecurityProvider } from './../../providers/security/security';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';


import { InboxPage } from '../inbox/inbox';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

  constructor(public navCtrl: NavController,
              private security: SecurityProvider,
              public platform: Platform) {
  }

  pushInbox(actualrole) {

    this.security.setRole(actualrole);
    this.navCtrl.setRoot(InboxPage);
/*
    this.platform.ready().then( (p) => {
      this.security.getRole().then( (val) => {
        if(actualrole == val){
          this.navCtrl.setRoot(InboxPage);
        } else {
          this.pushInbox(val)
        }
      });
    });*/

  }

}
