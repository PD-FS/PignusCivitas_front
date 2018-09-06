import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostObjectsPage } from './lost-objects';

@NgModule({
  declarations: [
    LostObjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(LostObjectsPage),
  ],
})
export class LostObjectsPageModule {}
