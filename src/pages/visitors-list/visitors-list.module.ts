import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitorListPage } from './visitors-list';

@NgModule({
  declarations: [
    VisitorListPage,
  ],
  imports: [
    IonicPageModule.forChild(VisitorListPage),
  ],
})
export class VisitorsListPageModule {}
