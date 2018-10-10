import { ConfigPage } from './../pages/config/config';
import { InboxPage } from './../pages/inbox/inbox';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LandingPage } from '../pages/landing/landing';

import { VehiclePage } from '../pages/vehicle/vehicle';
import { VisitorsPage } from '../pages/visitors/visitors';
import { LostObjectsPage } from '../pages/lost-objects/lost-objects';
import { AssetStockPage } from '../pages/asset-stock/asset-stock';
import { StaffPage } from '../pages/staff/staff';
import { SecurityAgentsPage } from '../pages/security-agents/security-agents';
import { MinuteGeneratePage } from '../pages/minute-generate/minute-generate';

import { SecurityProvider } from '../providers/security/security';
import { SecurityAgentCommunitiesPage } from '../pages/security-agent-communities/security-agent-communities';
import { IntercomPage } from '../pages/intercom/intercom';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: NavController;
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}> = [];

  inboxPage: {title: string, component: any, icon: string};

  configPage: {title: string, component: any, icon: string};

  userData: {name: string, code: string, email: string, community: string, img: string};

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private security:SecurityProvider,
              private auth: AngularFireAuth) {
    this.validarSesion();
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.inboxPage = { title: 'Bandeja de Entrada', component: InboxPage, icon: 'paper-plane'}
    this.configPage = { title: 'Configuración', component: ConfigPage, icon: ''}

  }

  public logout() {
    this.auth.auth.signOut();
  }

  private validarSesion() {
    this.security.getNotificator().subscribe(
        (data) => {
            if (this.nav && data == null) {
              this.nav.setRoot(LandingPage);
            }

            this.pages = []

            if (data == 0) {
              this.pages.push(
                { title: 'Vehículos', component: VehiclePage, icon: 'car'},
                { title: 'Objetos Perdidos', component: LostObjectsPage, icon: 'basket'},
                { title: 'Inventario', component: AssetStockPage, icon: 'list-box'},
                { title: 'Generar Minuta', component: MinuteGeneratePage, icon: 'paper'}
              );
            }

            this.pages.push(
              { title: 'Citófono', component: IntercomPage , icon: 'call'},
              { title: 'Visitantes', component: VisitorsPage , icon: 'people'},
              { title: 'Trabajadores', component: StaffPage, icon: 'contacts'},
              { title: 'Agentes de Seguridad', component: SecurityAgentsPage, icon: 'eye'},
              { title: 'Mis comunidades', component: SecurityAgentCommunitiesPage, icon: 'home'}
            );

            function compare(a, b) {
              // Use toUpperCase() to ignore character casing
              const titleA = a.title.toUpperCase();
              const titleB = b.title.toUpperCase();

              let comparison = 0;
              if (titleA > titleB) {
                comparison = 1;
              } else if (titleA < titleB) {
                comparison = -1;
              }
              return comparison;
            }

            this.pages = this.pages.sort(compare)

            if(data == 0)
            {
              this.userData = {name: 'Elvira Vigilar',
                               code: 'CIA87632',
                               email: 'elviravigilar@tusegurida.com',
                               community: 'Conjunto Las Aguas',
                               img: 'assets/imgs/vigilante.png'}
            }
            else if(data == 1)
            {
              this.userData = {name: 'Enzo Corleone',
                               code: '',
                               email: 'enzocorleone@gmail.com',
                               community: '',
                               img: 'assets/imgs/ciudadano.png'}
            } else{
              this.userData = {name: '',
                               code: '',
                               email: '',
                               community: '',
                               img: ''}
            }
        }
    );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}










