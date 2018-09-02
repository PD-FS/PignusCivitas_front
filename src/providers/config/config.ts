import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  private api_prod: string = "https://pignuscivitas.herokuapp.com"
  //private api_prod: string = "http://localhost:3000"

  constructor() {
    console.log('Hello ConfigProvider Provider');
  }

  /**
   * Funcion para obtener la url a utilizar en el ambiente
   */
  public getApiURL(): string {
    return this.api_prod;
  }

}
