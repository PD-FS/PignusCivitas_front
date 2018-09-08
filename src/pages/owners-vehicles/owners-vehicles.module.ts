import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwnersVehiclesPage } from './owners-vehicles';

@NgModule({
  declarations: [
    OwnersVehiclesPage,
  ],
  imports: [
    IonicPageModule.forChild(OwnersVehiclesPage),
  ],
})
export class OwnersVehiclesPageModule {}
