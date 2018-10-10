import { Observable } from 'rxjs';
import { ApiProvider } from './../api/api';
import { Injectable } from '@angular/core';

/*
  Generated class for the PeopleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleProvider {

  constructor(public api: ApiProvider) { }

  public getPerson(personId: number): Observable<any> {
    return this.api.get('people/' + personId + '.json', null, this.api.httpOptions);
  }

}
