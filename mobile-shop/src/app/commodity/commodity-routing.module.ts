import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommoditySelectComponent} from "./commodity-select/commodity-select.component";
import {ListCommodityComponent} from "./list-commodity/list-commodity.component";


const routes: Routes = [
  {
    path:'', component: CommoditySelectComponent

  },
  {
    path: 'list', component: ListCommodityComponent
  }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommodityRoutingModule { }
