import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecurityProvider } from '../../providers/security/security';
import { ToastController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

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
export class ConfigPage implements OnInit {

  userData;

  public showButton: boolean = false;

  public showEditButton: boolean = true;

  public readOnly: boolean = true;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl: ToastController,
              private security: SecurityProvider,
              private db: AngularFirestore,
              private auth: AngularFireAuth) {

    this.userData = {
      name: '',
      code: '',
      email: '',
      community: '',
      img: ''
    }
  }

  ngOnInit(): void {
    let db = this.db;
    let self = this
    this.auth.auth.onAuthStateChanged(function(user) {

      if (user) {
        let usermail = user.email || '';
        db.collection("userProfile").doc(usermail).ref.get().then(function(doc){
          console.log(doc.id)
          self.userData = doc.data();
          self.userData['email'] = doc.id;
        });

      } else {
        console.log('No hay usuario')
        self.userData = {
          name: '',
          code: '',
          email: '',
          community: '',
          img: ''
        }
      }
    });

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
  let userData = this.userData;
  let db = this.db
  let security = this.security
  console.log('userData form', this.userData)
  this.auth.auth.onAuthStateChanged(function(user) {
    if (user) {
      let usermail = user.email || '';
      db.collection("userProfile").doc(usermail).update({
          name: userData.name,
          code: userData.code,
          img: userData.img,
          address: userData.address
      })
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });

    } else {
      console.log('No hay usuario')
      security.setRole(1)
    }
  });

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
