import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VehicleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicle-detail',
  templateUrl: 'vehicle-detail.html',
})
export class VehicleDetailPage {

  public title: string = '';

    public readOnly: boolean = true;

    public vehicle: any = null;

    constructor(private navCtrl: NavController,
        private navParams: NavParams) {
        const objectId = this.navParams.get('vehicleId');
        console.log(objectId);
        this.vehicle = {
            plate: 'DZZ581',
            vehicletype: 'Automóvil',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMfU4Bk929Tsg1pa9k0hRoS3s-V-J6wBOz1IVr-RvVjsgr6BgQg',
            color: 'Rojo',
            status: 'Se encuentra con la luces prendidas'
        }
        this.title = this.vehicle.name;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LostObjectDetailPage');
    }

    public enableEdition() {
        this.readOnly = false;
    }

    public saveObject() {
        this.readOnly = true;
    }



}
