import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VisitorsVehiclesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visitors-vehicles',
  templateUrl: 'visitors-vehicles.html',
})
export class VisitorsVehiclesPage {

  public visitorsVehicules: {}[];

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
    this.visitorsVehicules = [
      {
        id: 0,
        brand: 'Chevrolet',
        model: 'Captiva',
        entrydate: 'Entrada hace 30 minutos',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/2006-2011_Chevrolet_Captiva_LS_wagon_%282015-12-28%29_01.jpg'
      },
      {
        id: 1,
        brand: 'Mazda',
        model: 'CX5',
        entrydate: 'Entrada hace 60 minutos',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkuC_ppgAZcdGXufR6UnjBZu_yXQ1A4cZ9XSaKEP4Q7MEAqzqMmA'
      },
      {
        id: 2,
        brand: 'Ford',
        model: 'Fiesta',
        entrydate: 'Entrada hace 60 minutos',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMfU4Bk929Tsg1pa9k0hRoS3s-V-J6wBOz1IVr-RvVjsgr6BgQg'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad visitors-vehiclesPage');
  }

  public itemTapped(event: any, vehicle: any): void {
    console.log('event: ' + event);
    console.log('agent: ' + vehicle);
  }

}
