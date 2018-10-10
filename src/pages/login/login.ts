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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AngularFireAuth) {
  }

  async login(user: User) {
    try {
      const result = await this.auth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result) {
        this.navCtrl.setRoot('InboxPage');
      }
    }
    catch(e) {
      console.error(e);
    }
  }

  register() {
    this.navCtrl.push('RegisterPage')
  }

}
