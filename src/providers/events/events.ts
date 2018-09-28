import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs';

/*
  Generated class for the EventsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventsProvider {

  constructor(public api: ApiProvider) {

  }

  public eventList(): Observable<Event[]> {

    return this.api.get('events.json', null, this.api.httpOptions);
  }

}
