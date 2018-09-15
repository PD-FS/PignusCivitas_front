import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehiclePage } from './vehicle';
import { VisitorsVehiclesPage } from '../visitors-vehicles/visitors-vehicles';
import { OwnersVehiclesPage } from '../owners-vehicles/owners-vehicles';

@NgModule({
  declarations: [
    VehiclePage,
  ],
  imports: [
    IonicPageModule.forChild(VehiclePage),
    VisitorsVehiclesPage,
    OwnersVehiclesPage
  ],
})
export class VehiclePageModule {}
