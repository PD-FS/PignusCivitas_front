import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchBarComponent } from '../../components/search-bar/search-bar';

/**
 * Generated class for the SecurityAgentCommunitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-security-agent-communities',
    templateUrl: 'security-agent-communities.html',
})
export class SecurityAgentCommunitiesPage {

    public cummunities: {}[];

    public showSearchBar: boolean = false;

    public securityAgentId: number;

    @ViewChild('searchBar')
    public searchBar: SearchBarComponent;

    constructor(public navCtrl: NavController,
        public navParams: NavParams) {
        this.securityAgentId = this.loadSecurityAgentId();
        this.loadCommunities()
    }

    public cancelSearch(event: any) {
        this.showSearchBar = false;
    }

    public search(event: any) {
    }

    private loadSecurityAgentId(): number {
        return 1;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SecurityAgentCommunitiesPage');
    }

    private loadCommunities(): void {
        if (!this.securityAgentId) {
            return;
        }
        this.cummunities = [
            {
                id: 0,
                name: 'Parque residencial calle 100',
                notes: '',
                created_at: new Date(),
                photo: 'http://conjuntocalle100.com/wp-content/themes/andreco/images/logo.jpg'
            },
            {
                id: 1,
                name: 'Conjunto las aguas',
                notes: '',
                created_at: new Date(),
                photo: 'http://conjuntocalle100.com/wp-content/themes/andreco/images/logo.jpg'
            },
            {
                id: 1,
                name: 'Conjunto residencial bogotano',
                notes: '',
                created_at: new Date(),
                photo: 'http://conjuntocalle100.com/wp-content/themes/andreco/images/logo.jpg'
            }
        ];
    }

    public itemTapped(event:any, community: any): void {
        console.log('event: ' + event);
    }

    public showSearch() {
        this.showSearchBar = true;
        this.searchBar.openDialog();
        this.searchBar.onSearch().subscribe(
            data => {
                this.searchCommunities(data);
            }
        );
    }

    public searchCommunities(filter: string) {
        console.log("buscando comunidades: " + filter);
    }

}
