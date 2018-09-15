import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AssetStockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-asset-stock',
    templateUrl: 'asset-stock.html',
})
export class AssetStockPage {
    public assetStock: {}[];

    public communityId: number;

    constructor(public navCtrl: NavController,
        public navParams: NavParams) {
            this.communityId = this.loadCommunityId();
        this.loadAssetStock()
    }

    private loadCommunityId(): number {
        return 1;
    }

    public selectCommunity(event: any) {
        this.loadAssetStock();
    }

    private loadAssetStock(): void {
        if (!this.communityId) {
            return;
        }
        this.assetStock = [
            {
                id: 0,
                name: 'Botiquín',
                notes: 'Botiquín primeros auxilio pequeño rojo',
                amount: '35'
            },
            {
                id: 1,
                name: 'Uniformes',
                notes: 'Uniformes servicios generales azul',
                amount: '15'
            },
            {
                id: 2,
                name: 'Libro de minutas',
                notes: 'Libro minutas generadas',
                amount: '63'
            }
        ];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SecurityAgentsPage');
    }

    public itemTapped(event:any, agent: any): void {
        console.log('event: ' + event);
        console.log('agent: ' + agent);
    }
}
