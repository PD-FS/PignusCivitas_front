import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitorHistoryPage } from './visitor-history';

@NgModule({
  declarations: [
    VisitorHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(VisitorHistoryPage),
  ],
})
export class VisitorHistoryPageModule {}
