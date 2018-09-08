import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitorsPage } from './visitors';

@NgModule({
  declarations: [
    VisitorsPage,
  ],
  imports: [
    IonicPageModule.forChild(VisitorsPage),
  ],
})
export class VisitorsPageModule {}
