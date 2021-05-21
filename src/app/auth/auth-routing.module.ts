import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogPageComponent } from './log-page/log-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path:'',
        component:LogPageComponent
      },
      {
        path:'registro',
        component:RegPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
