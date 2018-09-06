import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddLostObjectPage } from './add-lost-object';

@NgModule({
  declarations: [
    AddLostObjectPage,
  ],
  imports: [
    IonicPageModule.forChild(AddLostObjectPage),
  ],
})
export class AddLostObjectPageModule {}
