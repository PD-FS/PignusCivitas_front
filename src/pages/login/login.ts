import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  message: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AngularFireAuth) {
  }

  async login(user: User) {
    try {
      const result = await this.auth
                                  .auth
                                  .signInWithEmailAndPassword(user.email, user.password);
      if(result) {
        this.navCtrl.setRoot('InboxPage');
      }
    }
    catch(error) {
      console.error(error);
      if(error.code == 'auth/invalid-email'){
        this.message = 'Email no válido'
        console.log('Entre')
      } else if (error.code == 'auth/invalid-email') {
        this.message = 'Usuario no encontrado'
      } else if (error.code == 'auth/argument-error') {
        this.message = 'Ingrese un usuario y contraseña válido'
      } else if (error.code == 'auth/wrong-password') {
        this.message = 'Contraseña inválida'
      } else {
        this.message = 'No se pudo procesar su autenticación'
      }
    }
  }

  register() {
    this.navCtrl.push('RegisterPage')
  }

}
