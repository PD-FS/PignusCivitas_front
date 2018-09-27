import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VisitorHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visitor-history',
  templateUrl: 'visitor-history.html',
})
export class VisitorHistoryPage {

  public visitorHistory: {}[];

  public communityId: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    this.communityId = this.loadCommunityId();
    this.loadVisitorHistory()
  }

  private loadCommunityId(): number {
    return 1;
  }

  public selectCommunity(event: any) {
    this.loadVisitorHistory();
  }

  private loadVisitorHistory(): void {
    if (!this.communityId) {
      return;
    }
    this.visitorHistory = [
      {
        id: 0,
        firstname: 'Pedro',
        lastname: 'Martínez',
        checkoutdate: 'Entrada hace 30 minutos',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCswdKgLPnt79SzkGydguvOxuZkLlzJ4PQSup38ozfWuNy0-ZSkg'
      },
      {
        id: 1,
        firstname: 'Lorena',
        lastname: 'Palomasalva',
        checkoutdate: 'Entrada hace 60 minutos',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhxktMLHCrs3kp5McPdQo9_c9RdTpmwpjjPEAHtAi-mlpxsQ0'
      },
      {
        id: 2,
        firstname: 'Santiago',
        lastname: 'Guipuizcua',
        checkoutdate: 'Entrada hace 90 minutos',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJb3OmkOlhn0NsHa2_gZHdTsUph7TmOilnOFQSRZM4K2YjPt7foQ'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad visitor-HistoryPage');
  }

  public itemTapped(event: any, visitor: any): void {
    console.log('event: ' + event);
    console.log('agent: ' + visitor);
  }

}
