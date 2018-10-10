import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VisitorsVehiclesPage } from '../visitors-vehicles/visitors-vehicles';
import { OwnersVehiclesPage } from '../owners-vehicles/owners-vehicles';
import { AddVehiclePage } from '../add-vehicle/add-vehicle';
import { SearchBarComponent } from '../../components/search-bar/search-bar';

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

  public showSearchBar: boolean = false;

  @ViewChild('searchBar')
  public searchBar: SearchBarComponent;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiclePage');
  }

  public add() {
    this.navCtrl.push(AddVehiclePage);
}


public cancelSearch(event: any) {
  this.showSearchBar = false;
}

public search(event: any) {
}

public showSearch() {
  this.showSearchBar = true;
  this.searchBar.openDialog();
  this.searchBar.onSearch().subscribe(
      data => {
          this.searchVehicles(data);
      }
  );
}
  public searchVehicles(filter: string) {
      console.log("buscando vehículos: " + filter);
  }

}
