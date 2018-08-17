import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core'

@Injectable()
export class Role {

  private role: number;

  constructor(private storage: Storage) {
  }

  private setRole(val){
    this.role = val;
  }

  public getRole() {

    return this.storage.get('role')

  }
}
