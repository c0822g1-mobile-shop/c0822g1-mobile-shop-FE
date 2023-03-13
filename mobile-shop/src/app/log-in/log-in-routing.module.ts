import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login/login.component";
import {SignupComponent} from "./login/signup/signup.component";


const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'signUp',component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogInRoutingModule { }
