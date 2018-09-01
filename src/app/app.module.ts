import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import { ListPage } from '../pages/list/list';
import { InboxPage } from '../pages/inbox/inbox';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommunitiesProvider } from '../providers/communities/communities';
import { ConfigProvider } from '../providers/config/config';
import { EventsProvider } from '../providers/events/events';
import { SecurityProvider } from '../providers/security/security';
import { ApiProvider } from '../providers/api/api';


@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    ListPage,
    InboxPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    MatToolbarModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    ListPage,
    InboxPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommunitiesProvider,
    ConfigProvider,
    EventsProvider,
    SecurityProvider,
    ApiProvider
  ]
})
export class AppModule {}
