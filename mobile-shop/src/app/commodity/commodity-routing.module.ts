import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommoditySelectComponent} from "./commodity-select/commodity-select.component";


const routes: Routes = [
  {
    path:'', component: CommoditySelectComponent
  }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommodityRoutingModule { }
