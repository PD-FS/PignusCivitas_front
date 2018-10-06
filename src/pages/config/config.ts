import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecurityProvider } from '../../providers/security/security';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  userData: {name: string, code: string, email: string, community: string, img: string, address: string};

  public showButton: boolean = false;

  public showEditButton: boolean = true;

  public readOnly: boolean = true;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl: ToastController,
              private security: SecurityProvider) {

      this.security.getNotificator().subscribe(
        (data) => {
          if(data == 0)
            {
              this.userData = {name: 'Elvira Vigilar',
                               code: 'CIA87632',
                               email: 'elviravigilar@tusegurida.com',
                               community: 'Conjunto Las Aguas',
                               address: 'Calle 25 # 45 - 43',
                               img: 'assets/imgs/vigilante.png'}
            }
            else if(data == 1)
            {
              this.userData = {name: 'Enzo Corleone',
                               code: '',
                               email: 'enzocorleone@gmail.com',
                               community: '',
                               address: 'Calle 25 # 45 - 43',
                               img: 'assets/imgs/ciudadano.png'}
            } else{
              this.userData = {name: '',
                               code: '',
                               email: '',
                               community: '',
                               address: '',
                               img: ''}
            }
        }
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }
  public enableEdition() {
    this.readOnly = false;
    this.showButton = true;
    this.showEditButton = false;
}

public saveObject() {
  this.readOnly = true;
  this.showButton = false;
  this.showEditButton = true;
  const toast = this.toastCtrl.create({
    message: 'Guardado exitoso!',
    duration: 3000,
    position: 'top',
    showCloseButton: true,
    closeButtonText: 'x'
});
toast.present();

}

}
