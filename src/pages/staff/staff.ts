import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchBarComponent } from '../../components/search-bar/search-bar';

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

    public showSearchBar: boolean = false;

    @ViewChild('searchBar')
    public searchBar: SearchBarComponent;

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
                photo: 'https://thumb7.shutterstock.com/thumb_large/999518/460050457/stock-photo-portrait-of-handsome-man-in-black-suit-460050457.jpg'
            },
            {
                id: 1,
                name: 'Maria Ursal',
                role: 'Servicios generales',
                photo: 'https://thumb7.shutterstock.com/thumb_large/1106129/145382977/stock-photo-portrait-of-the-beautiful-girl-close-up-the-wind-fluttering-hair-145382977.jpg'
            },
            {
                id: 2,
                name: 'Ana Sandra Sopal',
                role: 'Administración',
                photo: 'https://cdn.pixabay.com/photo/2016/04/10/21/34/woman-1320810__340.jpg'
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

    public cancelSearch(event: any) {
        this.showSearchBar = false;
    }

    public search(event: any) {
    }

    public showSearch() {
        this.showSearchBar = true;
        this.searchBar.openDialog();
        this.searchBar.onSearch().subscribe(
            data => {
                this.searchStaff(data);
            }
        );
    }
        public searchStaff(filter: string) {
            console.log("buscando personas: " + filter);
        }

}
