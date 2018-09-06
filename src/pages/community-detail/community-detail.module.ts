import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunityDetailPage } from './community-detail';

@NgModule({
  declarations: [
    CommunityDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CommunityDetailPage),
  ],
})
export class CommunityDetailPageModule {}
