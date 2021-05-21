import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarPagComponent } from './car-pag/car-pag.component';

const routes: Routes = [
  {
  path:'',
  children:[
    {
      path:'',
      component:CarPagComponent

    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
