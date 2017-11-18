import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { FoodProvider } from '../../providers/food/food';
import { Food } from '../../models/Food';
import { AddPage } from '../add/add';
import { TotalPage } from '../total/total';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  private items: Array<Food>;

  constructor(public navCtrl: NavController, 
    private foodProvider: FoodProvider, 
    private modalCtrl: ModalController) {
  }

  ngOnInit(){
    this.items = this.foodProvider.list();
  }
  
  addFood(item){
    let modal = this.modalCtrl.create(AddPage, { item: item });
    modal.present();
  }

  showTotal(){
    let modal = this.modalCtrl.create(TotalPage);
    modal.present();
  }
}
