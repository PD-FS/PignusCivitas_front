import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VisitorsVehiclesPage } from '../visitors-vehicles/visitors-vehicles';
import { OwnersVehiclesPage } from '../owners-vehicles/owners-vehicles';
import { AddLostObjectPage } from '../add-lost-object/add-lost-object';
import { AddVehiclePage } from '../add-vehicle/add-vehicle';

/**
 * Generated class for the VehiclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicle',
  templateUrl: 'vehicle.html',
})
export class VehiclePage {
  tab1Root = VisitorsVehiclesPage
  tab2Root = OwnersVehiclesPage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiclePage');
  }

  public add() {
    this.navCtrl.push(AddVehiclePage);
}
}
