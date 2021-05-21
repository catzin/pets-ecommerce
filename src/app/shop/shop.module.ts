import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NostrosComponent } from './pages/nostros/nostros.component';


@NgModule({
  declarations: [HomeComponent, NostrosComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
