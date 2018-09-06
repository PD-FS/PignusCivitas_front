import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitorHistoryDetailPage } from './visitor-history-detail';

@NgModule({
  declarations: [
    VisitorHistoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(VisitorHistoryDetailPage),
  ],
})
export class VisitorHistoryDetailPageModule {}
