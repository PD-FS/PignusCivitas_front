import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core'

@Injectable()
export class RoleService {


  constructor(private storage: Storage) {
  }

  public setRole(val){
    this.storage.set('role', val);
  }

  public getRole() {

    return this.storage.get('role')

  }
}