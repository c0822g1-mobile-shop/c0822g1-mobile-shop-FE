import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';
import {LoginComponent} from "./login/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LogInRoutingModule,
    ReactiveFormsModule
  ]
})
export class LogInModule { }
