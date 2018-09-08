import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LandingPage } from '../pages/landing/landing';

import { VehiclePage } from '../pages/vehicle/vehicle';
import { CommunitiesPage } from '../pages/communities/communities';
import { VisitorsPage } from '../pages/visitors/visitors';
import { LostObjectsPage } from '../pages/lost-objects/lost-objects';
import { AssetStockPage } from '../pages/asset-stock/asset-stock';
import { StaffPage } from '../pages/staff/staff';
import { SecurityAgentsPage } from '../pages/security-agents/security-agents';
import { MinuteGeneratePage } from '../pages/minute-generate/minute-generate';

import { SecurityProvider } from '../providers/security/security';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: NavController;
  rootPage: any = LandingPage;

  pages: Array<{title: string, component: any}>;


  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private security:SecurityProvider) {
    this.validarSesion();
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Comunidades', component: CommunitiesPage },
      { title: 'Visitantes', component: VisitorsPage  },
      { title: 'Vehículos', component: VehiclePage },
      { title: 'Objetos Perdidos', component: LostObjectsPage },
      { title: 'Inventario', component: AssetStockPage },
      { title: 'Trabajadores', component: StaffPage },
      { title: 'Agentes de Seguridad', component: SecurityAgentsPage },
      { title: 'Generar Minuta', component: MinuteGeneratePage }

    ];
  }

  public logout() {
    this.security.setRole(null);
  }

  private validarSesion() {
    this.security.getNotificator().subscribe(
        (data) => {
            if (this.nav) {
                this.nav.setRoot(LandingPage);
                
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
