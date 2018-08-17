import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core'

@Injectable()
export class Role {

  constructor(private storage: Storage) {
  }

  public getRole(): number {

    let role : number = 0;

    this.storage.get('role').then( val => {
      role = val;
    })

    return role;
  }
}
