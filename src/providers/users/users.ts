import { SecurityProvider } from './../security/security';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(public http: HttpClient,
              private security: SecurityProvider,
              private platform: Platform) {
    console.log('Hello UsersProvider Provider');
  }

  getUser(): any {
    this.platform.ready().then( (p) => {
      this.security.getRole().then( (val) => {
        if(val == 0){
          return {}
        }
      });
    });
  }

}
