import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController, NavParams, ViewController } from 'ionic-angular';
import { Food } from '../../models/Food';
import { ShoppingCarProvider } from '../../providers/shopping-car/shopping-car';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  private food: Food;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public shoppingCar: ShoppingCarProvider,
    private toastCtrl: ToastController
  ) {
    this.food = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  add(qtd: number){
    this.shoppingCar.addItem(this.food, qtd);
    this.dismiss();
    let toast = this.toastCtrl.create({
      message: 'Food was added successfully',
      duration: 1500,
      position: 'top',
      cssClass: 'toast-success'
    });
  
    toast.present();
  }

}
