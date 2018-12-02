import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { SecurityProvider } from '../../providers/security/security';
import { AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/operator/toPromise';

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
              private security: SecurityProvider,
              private auth: AngularFireAuth,
              private db: AngularFirestore) {
  }

  async login(user: User) {
    try {
      const result = await this.auth
                                  .auth
                                  .signInWithEmailAndPassword(user.email, user.password);
      if(result) {
        let db = this.db
        let security = this.security
        this.auth.auth.onAuthStateChanged(function(user) {
          if (user) {
            let usermail = user.email || '';
            db.collection("userProfile").doc(usermail).ref.get().then(function(doc) {
              if(doc.exists){
                const data = doc.data()
                if(data){
                  security.setRole(data.role);
                }
              } else {
                security.setRole(1);
              }
            });
          } else {
            security.setRole(1)
          }
        });
        this.navCtrl.setRoot('InboxPage');
      }
    }
    catch(error) {
      console.error(error);
      if (error.code === 'auth/invalid-email'
        || error.code === 'auth/user-not-found') {
        this.message = 'Usuario/Contraseña no válido';
      } else if (error.code === 'auth/argument-error') {
        this.message = 'Ingrese un usuario y contraseña válido'
      } else if (error.code === 'auth/wrong-password') {
        this.message = 'Contraseña inválida';
      } else if (error.code === 'auth/weak-password') {
        this.message = 'Contraseña inválida';
      } else {
        this.message = 'No se pudo procesar su autenticación';
      }
    }
  }

  register() {
    this.navCtrl.push('RegisterPage')
  }


}
