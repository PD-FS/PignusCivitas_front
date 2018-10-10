import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxPage } from './inbox';
import { SharedModule } from '../../shared/shared.module';
import { MyheaderComponent } from '../../components/myheader/myheader';

@NgModule({
  declarations: [
    InboxPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxPage),
    SharedModule
  ],
  entryComponents: [
    MyheaderComponent
  ]
})
export class InboxPageModule {}
