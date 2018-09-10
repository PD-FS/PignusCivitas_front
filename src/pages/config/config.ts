import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecurityProvider } from '../../providers/security/security';

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

  userData: {name: string, code: string, email: string, community: string, img: string};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private security: SecurityProvider) {

      this.security.getNotificator().subscribe(
        (data) => {
          if(data == 0)
            {
              this.userData = {name: 'Elvira Vigilar',
                               code: 'CIA87632',
                               email: 'elviravigilar@tusegurida.com',
                               community: 'Conjunto Las Aguas',
                               img: 'assets/imgs/vigilante.png'}
            }
            else if(data == 1)
            {
              this.userData = {name: 'Enzo Corleone',
                               code: '',
                               email: 'enzocorleone@gmail.com',
                               community: '',
                               img: 'assets/imgs/ciudadano.png'}
            } else{
              this.userData = {name: '',
                               code: '',
                               email: '',
                               community: '',
                               img: ''}
            }
        }
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

}
