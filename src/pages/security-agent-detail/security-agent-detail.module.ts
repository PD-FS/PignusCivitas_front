import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecurityAgentDetailPage } from './security-agent-detail';

@NgModule({
  declarations: [
    SecurityAgentDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SecurityAgentDetailPage),
  ],
})
export class SecurityAgentDetailPageModule {}
