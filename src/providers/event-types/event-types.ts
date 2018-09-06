import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EventTypesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventTypesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EventTypesProvider Provider');
  }

}
