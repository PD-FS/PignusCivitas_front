import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

import { ToastController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  userProfileCollection;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AngularFireAuth,
              private toastCtrl: ToastController,
              private db: AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register(user: User) {
    let db = this.db;
    try{
      const result = await this.auth.auth.createUserWithEmailAndPassword(user.email, user.password);
      db.collection("userProfile").doc(user.email).set({
        name: '',
        code: '',
        community: '',
        img: '',
        address: '',
        role: 1
      })
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });

      let toast = this.toastCtrl.create({
        message: 'El usuario ha sido agregado satisfactoriamente',
        duration: 3000,
        position: 'top'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();

      console.log(result);
      this.navCtrl.setRoot('LoginPage');
    }
    catch(e){
      console.error(e);
    }
  }

}
