import { ApiProvider } from './../api/api';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

/*
  Generated class for the SecurityAgentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SecurityAgentsProvider {

  constructor(public api: ApiProvider) { }

  public getSecurityAgent(securityAgentId: number): Observable<any> {
    return this.api.get('security_agents/' + securityAgentId + '.json', null, this.api.httpOptions);
  }

}
