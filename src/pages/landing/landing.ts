import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { RoleService } from '../../common/services/role.service';


import { InboxPage } from '../inbox/inbox';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
  providers: [RoleService]
})
export class LandingPage {

  constructor(public navCtrl: NavController,
              private role: RoleService,
              public platform: Platform) {

  }

  pushInbox(actualrole) {

    this.role.setRole(actualrole);

    this.platform.ready().then( (p) => {
      this.role.getRole().then( (val) => {
        if(actualrole == val){
          this.navCtrl.setRoot(InboxPage);
        } else {
          this.pushInbox(val)
        }
      });
    });

  }

}
