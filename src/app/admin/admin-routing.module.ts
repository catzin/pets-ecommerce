import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoProdComponent } from './pages/nuevo-prod/nuevo-prod.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:NuevoProdComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
