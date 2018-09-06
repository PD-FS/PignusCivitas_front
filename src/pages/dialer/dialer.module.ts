import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DialerPage } from './dialer';

@NgModule({
  declarations: [
    DialerPage,
  ],
  imports: [
    IonicPageModule.forChild(DialerPage),
  ],
})
export class DialerPageModule {}
