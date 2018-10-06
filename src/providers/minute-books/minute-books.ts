import { Observable } from 'rxjs';
import { ApiProvider } from './../api/api';
import { Injectable } from '@angular/core';

/*
  Generated class for the MinuteBooksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MinuteBooksProvider {

  constructor(public api: ApiProvider) { }

  public minuteBooksList(): Observable<any[]> {
    return this.api.get('minute_books.json', null, this.api.httpOptions);
  }

}
