import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarPagComponent } from './car-pag/car-pag.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { DataComponent } from './components/data/data.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CarPagComponent, CardItemComponent, DataComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarModule { }
