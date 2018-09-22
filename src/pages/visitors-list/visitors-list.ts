import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VisitorsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visitors-list',
  templateUrl: 'visitors-list.html',
})
export class VisitorListPage {

  public visitorsList: {}[];

  public communityId: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    this.communityId = this.loadCommunityId();
    this.loadVisitorsList()
  }

  private loadCommunityId(): number {
    return 1;
  }

  public selectCommunity(event: any) {
    this.loadVisitorsList();
  }

  private loadVisitorsList(): void {
    if (!this.communityId) {
      return;
    }
    this.visitorsList = [
      {
        id: 0,
        firstname: 'Luis',
        lastname: 'Suarez',
        checkindate: 'Entrada hace 25 minutos',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Sjxu5EcrhVbl2o3qw6QPucm5dNWx0Uxm4hb8HqeH9_5S8Jaz'
      },
      {
        id: 1,
        firstname: 'Lionel',
        lastname: 'Messi',
        checkindate: 'Entrada hace 55 minutos',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHuvWG3RHpqGxHnxK9eG6SmpMrYLpJZHB5t23iS-lR8ncjZj4_bQ'
      },
      {
        id: 2,
        firstname: 'Andrés Iniesta',
        lastname: 'Guipuizcua',
        checkindate: 'Entrada hace 75 minutos',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqQKVMIP-CH_60K7zNwfRB2i7x_4Yt8VkcFAIeD8WXKn-W2PCwg'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad visitor-ListPage');
  }

  public itemTapped(event: any, visitor: any): void {
    console.log('event: ' + event);
    console.log('agent: ' + visitor);
  }

}
