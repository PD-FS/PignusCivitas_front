import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecurityAgentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-security-agents',
    templateUrl: 'security-agents.html',
})
export class SecurityAgentsPage {

    public securityAgents: {}[];

    public communityId: number;

    constructor(public navCtrl: NavController,
            public navParams: NavParams) {
        this.communityId = this.loadCommunityId();
        this.loadSecurityAgents()
    }

    private loadCommunityId(): number {
        return 1;
    }

    public selectCommunity(event: any) {
        this.loadSecurityAgents();
    }

    private loadSecurityAgents(): void {
        if (!this.communityId) {
            return;
        }
        this.securityAgents = [
            {
                id: 0,
                name: 'Elvira Vigilar',
                role: 'Agente de Seguridad',
                photo: 'https://lh3.googleusercontent.com/J7Mqr3sfCxZu51OfXLRXld7UWh4e75AwELsC5xJY3Ckcm9jwdItlwms5doNZfrSAkQ=s180-rw'
            },
            {
                id: 1,
                name: 'Carlos Omar Sacabandido',
                role: 'Agente de Seguridad',
                photo: 'https://lh3.googleusercontent.com/J7Mqr3sfCxZu51OfXLRXld7UWh4e75AwELsC5xJY3Ckcm9jwdItlwms5doNZfrSAkQ=s180-rw'
            },
            {
                id: 2,
                name: 'Enzo Villamizar',
                role: 'Agente de Seguridad',
                photo: 'https://lh3.googleusercontent.com/J7Mqr3sfCxZu51OfXLRXld7UWh4e75AwELsC5xJY3Ckcm9jwdItlwms5doNZfrSAkQ=s180-rw'
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
