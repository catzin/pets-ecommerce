import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CardProductComponent } from './components/card-product/card-product.component';
import { MarcaCardComponent } from './components/marca-card/marca-card.component';
import { ListadoComponent } from './components/listado/listado.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';
import { MaterialsModule } from '../materials/materials.module';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CardProductComponent, MarcaCardComponent, ListadoComponent, VerProductoComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MaterialsModule,
    ReactiveFormsModule,
    SharedModule

  ]
})
export class ProductosModule { }
