import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AlertCommunitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertCommunitiesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AlertCommunitiesProvider Provider');
  }

}
