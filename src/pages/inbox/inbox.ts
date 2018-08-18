import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LandingPage } from '../landing/landing';
import { RoleService } from '../../common/services/role.service'
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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private role: RoleService) {
  }

  ionViewDidLoad() {

    this.role.getRole().then((val) => {
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

}
