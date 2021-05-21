import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NuevoProdComponent } from './pages/nuevo-prod/nuevo-prod.component';


@NgModule({
  declarations: [NuevoProdComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
