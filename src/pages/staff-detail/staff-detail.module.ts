import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffDetailPage } from './staff-detail';

@NgModule({
  declarations: [
    StaffDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StaffDetailPage),
  ],
})
export class StaffDetailPageModule {}
