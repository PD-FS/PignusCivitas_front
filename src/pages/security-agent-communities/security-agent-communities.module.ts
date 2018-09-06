import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecurityAgentCommunitiesPage } from './security-agent-communities';

@NgModule({
  declarations: [
    SecurityAgentCommunitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(SecurityAgentCommunitiesPage),
  ],
})
export class SecurityAgentCommunitiesPageModule {}
