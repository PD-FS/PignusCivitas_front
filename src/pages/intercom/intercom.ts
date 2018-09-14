import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Peer from 'peerjs';
import { SecurityProvider } from '../../providers/security/security';

/**
 * Generated class for the IntercomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intercom',
  templateUrl: 'intercom.html',
})
export class IntercomPage {

  peer : Peer;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private security: SecurityProvider) {

    let id = ''
    if(this.security.getRole() == 0) {
      id = 'Vigilante'
    }
    else{
      id = 'Ciudadano'
    }

    this.peer = new Peer(id)


    this.peer.on('open', function(id) {
      console.log('My peer ID is: ' + id);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntercomPage');
  }

}
