import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCommodityComponent} from "./commodity/list-commodity/list-commodity.component";
import {BodyComponent} from "./home/body/body.component";


const routes: Routes = [
  // {path:'',component:BodyComponent},
  {path:'',component:ListCommodityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
