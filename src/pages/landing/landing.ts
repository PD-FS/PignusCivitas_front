import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InboxPage } from '../inbox/inbox';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

  constructor(public navCtrl: NavController) {

  }

  pushPage(page) {

    this.navCtrl.push(InboxPage, {
      page: page
    });

  }

}
