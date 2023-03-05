import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from "./body/body.component";
import {ProfileComponent} from "./profile/profile/profile.component";


const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
