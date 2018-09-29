import { Observable } from 'rxjs';
import { ApiProvider } from './../api/api';
import { Injectable } from '@angular/core';

/*
  Generated class for the EventTypesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventTypesProvider {

  constructor(public api: ApiProvider) {
    console.log('Hello EventTypesProvider Provider');
  }

  public eventTypesList(): Observable<any[]> {
    return this.api.get('event_types.json', null, this.api.httpOptions);
  }

}
