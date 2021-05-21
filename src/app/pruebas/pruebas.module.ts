import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebasRoutingModule } from './pruebas-routing.module';
import { VistaComponent } from './vista/vista.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [VistaComponent],
  imports: [
    CommonModule,
    PruebasRoutingModule,
    ReactiveFormsModule
  ]
})
export class PruebasModule { }
