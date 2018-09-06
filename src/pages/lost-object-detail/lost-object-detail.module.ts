import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostObjectDetailPage } from './lost-object-detail';

@NgModule({
  declarations: [
    LostObjectDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LostObjectDetailPage),
  ],
})
export class LostObjectDetailPageModule {}
