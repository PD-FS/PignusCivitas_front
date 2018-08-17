import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LandingPage } from '../landing/landing';
import { Role } from '../../common/role'
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
    Role
  ]
})
export class InboxPage {

  page:number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              private role: Role) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
    this.storage.get('page').then( (val) => {
      if(val != null){
        console.log("Value in Storage : ", val)
        this.page = this.role.getRole();
      }
      else{
        console.log("Null or Undefined value err :", val)
        this.navCtrl.setRoot(LandingPage);
      }}, (err) => {
        console.log("Storage error : ", err)
      })

  }

}
