import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LogPageComponent } from './log-page/log-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LogPageComponent, RegPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule

  ]
})
export class AuthModule { }
