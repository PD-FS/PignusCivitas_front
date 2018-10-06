import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImagePicker } from '@ionic-native/image-picker';

/**
 * Generated class for the AddVehiclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-vehicle',
  templateUrl: 'add-vehicle.html',
})
export class AddVehiclePage {

  public formulario: FormGroup = this.formBuilder.group({
    model: ['', Validators.required],
    brand: ['', Validators.required],
    plate: ['', Validators.required],
    autorizedBy: ['', Validators.required]
});

public saved: boolean = false;

public object: any = {
model: '',
brand: '',
plate: '',
autorizedBy: '',
photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEm0yZS9VwA7f8Zjp7kQI_WPdFns0CMxKEpoJIDwN0suLWW02U'
}

constructor(public navCtrl: NavController,
public navParams: NavParams,
private imagePicker: ImagePicker,
private formBuilder: FormBuilder) {

}

ionViewDidLoad() {
console.log('ionViewDidLoad AddVehiclePage');
}


public save() {
this.saved = true;
console.log(this.formulario.status);
if (this.formulario.valid) {
this.navCtrl.pop();
}
}

public attachImage(): void {
  const options = {
      maximumImagesCount: 1,
      width: 800,
      height: 800,
      quality: 80
  };
  this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
  }, (err) => { });
}

}
