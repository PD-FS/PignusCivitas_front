import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VisitorHistoryPage } from '../visitor-history/visitor-history';
import { VisitorListPage } from '../visitors-list/visitors-list';
import { AddVisitorPage } from '../add-visitor/add-visitor';


/**
 * Generated class for the VisitorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visitors',
  templateUrl: 'visitors.html',
})
export class VisitorsPage {
  tab1Root = VisitorListPage
  tab2Root = VisitorHistoryPage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitorsPage');
  }

  public add() {
    this.navCtrl.push(AddVisitorPage);
}

}
