import { ApiProvider } from './../api/api';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

/*
  Generated class for the EventStatusesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventStatusesProvider {

  constructor(public api: ApiProvider) {
    
  }

  public eventStatusesList(): Observable<any[]> {
    return this.api.get('event_statuses.json', null, this.api.httpOptions);
  }

}
