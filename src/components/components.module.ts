import { NgModule } from '@angular/core';
import { MyheaderComponent } from './myheader/myheader';
import { ValidationMessagesComponent } from './validation-messages/validation-messages';
import { SearchBarComponent } from './search-bar/search-bar';
import { SearchBarImplementComponent } from './search-bar-implement/search-bar-implement';
@NgModule({
	declarations: [MyheaderComponent,
    ValidationMessagesComponent,
    SearchBarComponent,
    SearchBarImplementComponent],
	imports: [],
	exports: [MyheaderComponent,
    ValidationMessagesComponent,
    SearchBarComponent,
    SearchBarImplementComponent]
})
export class ComponentsModule {}
