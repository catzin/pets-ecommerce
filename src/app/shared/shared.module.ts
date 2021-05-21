import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialsModule } from '../materials/materials.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule,
    
  ],
  exports:[
    NavbarComponent,
   

  ]
})
export class SharedModule { }
