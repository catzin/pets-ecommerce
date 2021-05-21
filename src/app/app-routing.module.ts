import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren: ()=> import('./shop/shop.module').then(m => m.ShopModule)
  },
  {
    path:'productos',
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path:'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule)
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path:'cart',
    loadChildren: () => import('./car/car.module').then(m => m.CarModule)
  },
  {
    path:'pruebas',
    loadChildren: () => import('./pruebas/pruebas.module').then( m => m.PruebasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
