import { NgModule } from '@angular/core';;
import { MyheaderComponent } from '../components/myheader/myheader';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from '../app/app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicModule } from 'ionic-angular';
import { SearchBarComponent } from '../components/search-bar/search-bar';
import { SearchBarImplementComponent } from '../components/search-bar-implement/search-bar-implement';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MyheaderComponent,
    SearchBarComponent,
    SearchBarImplementComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    IonicModule

  ],
  exports: [
    MyheaderComponent,
    SearchBarComponent,
    SearchBarImplementComponent
  ]
})
export class SharedModule {}
