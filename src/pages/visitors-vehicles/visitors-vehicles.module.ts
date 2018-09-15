import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitorsVehiclesPage } from './visitors-vehicles';

@NgModule({
  declarations: [
    VisitorsVehiclesPage,
  ],
  imports: [
    IonicPageModule.forChild(VisitorsVehiclesPage),
  ],
})
export class VisitorsVehiclesPageModule {}
