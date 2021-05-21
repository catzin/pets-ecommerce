import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaCardComponent } from './components/marca-card/marca-card.component';
import { ListadoComponent } from './components/listado/listado.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'marcas/mascota/:tipo',
        component:MarcaCardComponent,
      },
      {
        path:'marca/:tipo/:marc',
        component:ListadoComponent
      },
      {
        path:'ver-producto/:mascota/:marca/:categoria/:raza',
        component:VerProductoComponent
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
