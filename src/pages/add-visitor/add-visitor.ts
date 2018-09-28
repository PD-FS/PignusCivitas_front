import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the AddVisitorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-visitor',
  templateUrl: 'add-visitor.html',
})
export class AddVisitorPage {

  data: any;
  constructor(private barcodeScanner: BarcodeScanner) {
    async () => {
      this.data = await this.scan();
    }
  }

  scan() {

    this.barcodeScanner.scan({formats: 'PDF_417'}).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      return barcodeData;
     }).catch(err => {
         console.log('Error', err);
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddVisitorPage');
  }

}
