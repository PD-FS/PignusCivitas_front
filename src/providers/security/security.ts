import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/*
  Generated class for the SecurityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SecurityProvider {

  private role: any = null;
  public notificadorLanding = new BehaviorSubject(this.role);


  constructor() {
  }

  public setRole(val) {
    this.role = val;
    this.validateSession(val);
  }

  public getRole(): any {
    return this.role;
  }

  public getNotificator(): Observable<any> {
      return this.notificadorLanding.asObservable();
  }

  private validateSession(val: any): void {
    this.notificadorLanding.next(this.role);
    /*
    if (val === null || val === undefined) {
      this.notificadorLanding.next(0);
    }
    else{
      this.notificadorLanding.next(this.role);
    }*/
  }

}
