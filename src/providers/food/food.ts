import { Injectable } from '@angular/core';
import { Food } from '../../models/Food';

/*
  Generated class for the FoodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodProvider {
  private readonly csv = 
  `potatoe;2,9
  milk;1,9
  lentils ;0,9
  beans ;2
  tofu ;2
  nuts;2,3
  rice;2,7
  eggs ;4,8
  tuna;6,1
  chicken;6,9
  turkey ;10,9
  pork ;12,1
  cheese;13,5
  beef;27
  lamb;39,1
  farmed salmon;11,9`

  constructor() {
  } 

  list(): Array<Food>{
    const ret = new Array<Food>();
    
    const lines = this.csv.split('\n');
    for (let index = 0; index < lines.length; index++) {
      const element = lines[index].trim().split(';');
      const f = new Food();
      f.name = element[0];
      f.co2ForKg = Number(element[1].split(',').join('.'));
      ret.push(f);
    }

    return ret;
  }
  
}