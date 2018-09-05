import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinuteGeneratePage } from './minute-generate';

@NgModule({
  declarations: [
    MinuteGeneratePage,
  ],
  imports: [
    IonicPageModule.forChild(MinuteGeneratePage),
  ],
})
export class MinuteGeneratePageModule {}
