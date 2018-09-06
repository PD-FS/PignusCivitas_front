import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AssetStatusesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AssetStatusesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AssetStatusesProvider Provider');
  }

}
