import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VehicleDetailPage } from '../vehicle-detail/vehicle-detail';

/**
 * Generated class for the OwnersVehiclesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-owners-vehicles',
  templateUrl: 'owners-vehicles.html',
})
export class OwnersVehiclesPage {

  public ownersVehicules: {}[];

  public communityId: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    this.communityId = this.loadCommunityId();
    this.loadVisitorsVehicules()
  }

  private loadCommunityId(): number {
    return 1;
  }

  public selectCommunity(event: any) {
    this.loadVisitorsVehicules();
  }

  private loadVisitorsVehicules(): void {
    if (!this.communityId) {
      return;
    }
    this.ownersVehicules = [
      {
        id: 0,
        brand: 'Lamborghini',
        model: 'Aventador',
        entrydate: 'Entrada hace 30 minutos',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qH5_y0uVJFg7RGc6qUV5bGiQGPKTFMhKjaDv1oCjVgK8cww7wQ'
      },
      {
        id: 1,
        brand: 'Mercedes Benz',
        model: 'Clase S',
        entrydate: 'Entrada hace 60 minutos',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnQEPbLmm3CCNIYhnWAj2OZqWNwVtU38rkBW5Poswdq7R1tgVGw'
      },
      {
        id: 2,
        brand: 'BMW',
        model: 'Serie 7',
        entrydate: 'Entrada hace 60 minutos',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB0-5PtVoONjQ9ySeFsAn60Y4klHc3vR2TnGZqwHqdUyzFS18Sww'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad visitors-vehiclesPage');
  }

  public itemTapped(event: any, vehicle: any): void {
    console.log('event: ' + event);
    console.log('agent: ' + vehicle);
    this.navCtrl.push(VehicleDetailPage, {
      vehicleId: vehicle.id
    });
  }


}
