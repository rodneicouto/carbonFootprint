import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';
import { ShoppingCarProvider } from '../../providers/shopping-car/shopping-car';
import { Food } from '../../models/Food';

/**
 * Generated class for the TotalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-total',
  templateUrl: 'total.html',
})
export class TotalPage {
  
  private items: Food[];
  private total: number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private shoopingCar: ShoppingCarProvider
  ) {
  }  
  ngOnInit(){
    this.total = 0;
    this.items = this.shoopingCar.items;
    for (let index = 0; index < this.items.length; index++) {
      const element = this.items[index];
      this.total += (element.co2ForGrams((element as any).$qtd));      
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  remove(item) {
    this.shoopingCar.removeItem(item);
    this.ngOnInit();
  }

}
