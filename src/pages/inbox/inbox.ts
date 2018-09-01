import { SecurityProvider } from './../../providers/security/security';
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
  items: Array<{title: string, description: string, icon: string, color: string, img: string}>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private security: SecurityProvider) {

    this.items = [
      {
        "title":"Conjunto Las Aguas",
       "description":"Persona sospechosa",
       "icon":"alert",
       "color": "danger",
       "img": "assets/imgs/pignus_icon.png"
      },
      {
        "title":"Colegio San Ignacio",
       "description":"Cambio de turno de vigilancia",
       "icon":"warning",
       "color": "energized",
       "img": "assets/imgs/pignus_icon.png"
      },
      {
        "title":"Conjunto Residencial Villa Paredes",
       "description":"Persona sospechosa",
       "icon":"alert",
       "color": "danger",
       "img": "assets/imgs/pignus_icon.png"
      },
      {
        "title":"Empresa de Seguridad",
       "description":"Persona sospechosa",
       "icon":"notifications",
       "color": "secondary",
       "img": "assets/imgs/pignus_icon.png"
      }
    ];
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
