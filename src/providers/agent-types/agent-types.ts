import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AgentTypesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AgentTypesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AgentTypesProvider Provider');
  }

}
