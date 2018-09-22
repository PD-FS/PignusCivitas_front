import { NgModule } from '@angular/core';
import { MyheaderComponent } from './myheader/myheader';
import { ValidationMessagesComponent } from './validation-messages/validation-messages';
@NgModule({
	declarations: [MyheaderComponent,
    ValidationMessagesComponent],
	imports: [],
	exports: [MyheaderComponent,
    ValidationMessagesComponent]
})
export class ComponentsModule {}
