import { SecurityProvider } from './../security/security';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(public http: HttpClient, private security: SecurityProvider) {
    console.log('Hello UsersProvider Provider');
  }

  getUser(): any {
    this.security.getRole().then( (val) => {

    });
  }

}
