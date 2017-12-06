import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FoodProvider } from '../providers/food/food';
import { FilterPipe } from '../pipes/filter.pipe';
import { AddPage } from '../pages/add/add';
import { ShoppingCarProvider } from '../providers/shopping-car/shopping-car';
import { TotalPage } from '../pages/total/total';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilterPipe,
    AddPage,
    TotalPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPage,
    TotalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodProvider,
    ShoppingCarProvider
  ]
})
export class AppModule {}
