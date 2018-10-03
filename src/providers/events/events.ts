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

  public eventList(): Observable<any[]> {
    return this.api.get('events.json', null, this.api.httpOptions);
  }

  public saveEvent(event: any): Observable<any> {
    return this.api.post('events.json', event, this.api.httpOptions);
  }

  public getEvent(eventId: number): Observable<any> {
    return this.api.get('events/' + eventId + '.json', null, this.api.httpOptions);
  }

}
