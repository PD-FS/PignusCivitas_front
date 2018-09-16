import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LostObjectDetailPage } from '../lost-object-detail/lost-object-detail';

/**
 * Generated class for the LostObjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-lost-objects',
    templateUrl: 'lost-objects.html',
})
export class LostObjectsPage {

    public lostObjects: {}[];

    public communityId: number;

    constructor(public navCtrl: NavController,
        public navParams: NavParams) {
        this.communityId = this.loadCommunityId();
        this.loadLostObjects();
    }

    private loadCommunityId(): number {
        return 1;
    }

    public selectCommunity(event: any) {
        console.log(event);
        this.loadLostObjects();
    }

    private loadLostObjects(): void {
        if (!this.communityId) {
            return;
        }
        this.lostObjects = [
            {
                id: 0,
                name: 'Sombrilla roja',
                notes: 'Sombrilla grande de color rojo con mango de madera',
                photo: 'https://ferreteriavidri.com/images/items/large/119198.jpg'
            },
            {
                id: 1,
                name: 'Jersey de hombre',
                notes: 'Color gris talla M',
                photo: 'https://http2.mlstatic.com/D_Q_NP_689405-MCO25014625459_082016-Q.jpg'
            },
            {
                id: 2,
                name: 'Juguete frisbee',
                notes: 'Frisbee para perros color amarillo',
                photo: 'https://animalcity.es/24577-thickbox_default/juguete-frisbee-perros-amarillo.jpg'
            }
        ];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LostObjectsPage');
    }

    public itemTapped(event: any, object: any): void {
        console.log('event: ' + event);
        console.log('object: ' + object);
        this.navCtrl.push(LostObjectDetailPage, {
            objectId: object.id
        });
    }

}
