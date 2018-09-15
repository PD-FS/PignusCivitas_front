import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-staff',
    templateUrl: 'staff.html',
})
export class StaffPage {

    public staffs: {}[];

    public communityId: number;

    constructor(public navCtrl: NavController,
            public navParams: NavParams) {
        this.communityId = this.loadCommunityId();
        this.loadStaff()
    }

    private loadCommunityId(): number {
        return 1;
    }

    public selectCommunity(event: any) {
        this.loadStaff();
    }

    private loadStaff(): void {
        if (!this.communityId) {
            return;
        }
        this.staffs = [
            {
                id: 0,
                name: 'Carlos Agüero',
                role: 'Jardinero',
                photo: 'https://lh3.googleusercontent.com/J7Mqr3sfCxZu51OfXLRXld7UWh4e75AwELsC5xJY3Ckcm9jwdItlwms5doNZfrSAkQ=s180-rw'
            },
            {
                id: 1,
                name: 'Maria Ursal',
                role: 'Servicios generales',
                photo: 'https://lh3.googleusercontent.com/J7Mqr3sfCxZu51OfXLRXld7UWh4e75AwELsC5xJY3Ckcm9jwdItlwms5doNZfrSAkQ=s180-rw'
            },
            {
                id: 2,
                name: 'Ana Sandra Sopal',
                role: 'Administración',
                photo: 'https://lh3.googleusercontent.com/J7Mqr3sfCxZu51OfXLRXld7UWh4e75AwELsC5xJY3Ckcm9jwdItlwms5doNZfrSAkQ=s180-rw'
            }
        ];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SecurityAgentsPage');
    }

    public itemTapped(event: any, worker: any): void {
        console.log('event: ' + event);
        console.log('worker: ' + worker);
    }

}
