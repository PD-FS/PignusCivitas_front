import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddVisitorPage } from './add-visitor';

@NgModule({
  declarations: [
    AddVisitorPage,
  ],
  imports: [
    IonicPageModule.forChild(AddVisitorPage),
  ],
})
export class AddVisitorPageModule {}
