import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/*
  Generated class for the SecurityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SecurityProvider {
  private notificadorLanding = new BehaviorSubject({});
  private role: any = null;

  constructor() {
  }

  public setRole(val) {
    this.validateSession(val);
    this.role = val;
  }

  public getRole(): any {
    this.validateSession(this.role);
    return this.role;
  }

  public getNotificator(): Observable<any> {
      return this.notificadorLanding.asObservable();
  }

  private validateSession(val: any): void {
    if (val === null || val === undefined) {
        this.notificadorLanding.next({});
    }
  }

}
