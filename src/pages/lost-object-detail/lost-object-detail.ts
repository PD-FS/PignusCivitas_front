import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LostObjectDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-lost-object-detail',
    templateUrl: 'lost-object-detail.html',
})
export class LostObjectDetailPage {

    public title: string = '';

    public readOnly: boolean = true;

    public object: any = null;

    constructor(private navParams: NavParams,
        private toastCtrl: ToastController) {
        const objectId = this.navParams.get('objectId');
        console.log(objectId);
        this.object = {
            name: 'Sombrilla',
            notes: 'Sombrilla marilla de éxito',
            photo: 'https://i.pinimg.com/originals/a8/a5/d2/a8a5d2cacda2c9bfa7a961e756a1cbc4.png',
            status: ''
        }
        this.title = this.object.name;
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

    public deliver() {
        const toast = this.toastCtrl.create({
            message: 'Confirmado!',
            duration: 3000,
            position: 'top',
            showCloseButton: true,
            closeButtonText: 'x'
        });
        toast.present();
    }

}
