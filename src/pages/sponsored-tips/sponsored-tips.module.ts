import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SponsoredTipsPage } from './sponsored-tips';

@NgModule({
  declarations: [
    SponsoredTipsPage,
  ],
  imports: [
    IonicPageModule.forChild(SponsoredTipsPage),
  ],
})
export class SponsoredTipsPageModule {}
