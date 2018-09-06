import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntercomPage } from './intercom';

@NgModule({
  declarations: [
    IntercomPage,
  ],
  imports: [
    IonicPageModule.forChild(IntercomPage),
  ],
})
export class IntercomPageModule {}
