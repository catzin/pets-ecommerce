import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NostrosComponent } from './pages/nostros/nostros.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'nosotros',
        component:NostrosComponent
      },
      {
        path:'**',
        redirectTo:''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
