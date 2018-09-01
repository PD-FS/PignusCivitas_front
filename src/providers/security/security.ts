import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the SecurityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SecurityProvider {

  constructor(public http: HttpClient,
              private storage: Storage) {
    console.log('Hello SecurityProvider Provider');
  }

  public setRole(val){
    this.storage.set('role', val);
  }

  public getRole() {

    return this.storage.get('role')

  }

}
