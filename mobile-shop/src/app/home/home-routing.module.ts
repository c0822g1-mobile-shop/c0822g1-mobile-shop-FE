import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from "./body/body.component";
import {ProfileComponent} from "./profile/profile/profile.component";
import {CartComponent} from "./cart/cart/cart.component";

const routes: Routes = [

  {path: '', component: BodyComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '' , component: BodyComponent},
  {path: 'cart' , component: CartComponent},
  {path: 'home/:name', component: BodyComponent},
  {path: 'home/:name', component: BodyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
