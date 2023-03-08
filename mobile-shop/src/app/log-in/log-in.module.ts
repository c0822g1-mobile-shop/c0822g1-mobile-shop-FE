import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';
import {LoginComponent} from "./login/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import { SignupComponent } from './login/signup/signup.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    LogInRoutingModule,
    ReactiveFormsModule
  ]
})
export class LogInModule { }
