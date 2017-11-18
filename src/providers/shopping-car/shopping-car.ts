import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../../models/Food';

/*
  Generated class for the ShoppingCarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShoppingCarProvider {
  
  public readonly items: Array<Food> = [];

  constructor() {
    console.log('Hello ShoppingCarProvider Provider');
  }

  addItem(item: Food, qtd: number){
    item = item.clone();
    (item as any).$id =this.getNewGUIDString();
    (item as any).$qtd = qtd;
    this.items.push(item);
  }

  removeItem(item: Food){
    if( !(item as any).$id) throw 'invalid item to remove';
    for (let index = 0; index < this.items.length; index++) {
      const element = this.items[index];
      if( (element as any).$id == (item as any).$id) {
        this.items.splice(index, 1);
        return;
      }
    }
  }

  private getNewGUIDString() {
    // your favourite guid generation function could go here
    // ex: http://stackoverflow.com/a/8809472/188246
    let d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

}
