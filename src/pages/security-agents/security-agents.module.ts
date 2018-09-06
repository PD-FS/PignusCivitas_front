import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecurityAgentsPage } from './security-agents';

@NgModule({
  declarations: [
    SecurityAgentsPage,
  ],
  imports: [
    IonicPageModule.forChild(SecurityAgentsPage),
  ],
})
export class SecurityAgentsPageModule {}
