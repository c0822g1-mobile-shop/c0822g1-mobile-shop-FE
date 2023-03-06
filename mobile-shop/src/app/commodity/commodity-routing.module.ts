// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { Routes, RouterModule } from '@angular/router';



import {CommoditySelectComponent} from "./commodity-select/commodity-select.component";
import {ListCommodityComponent} from "./list-commodity/list-commodity.component";
import {CreateCommodityComponent} from "./create-commodity/create-commodity.component";
import {EditCommodityComponent} from "./edit-commodity/edit-commodity.component";


const routes: Routes = [
  {
    path:'', component: CommoditySelectComponent

  },
  {
    path: 'commodity/list', component: ListCommodityComponent
  },
  {
    path: 'commodity/create', component: CreateCommodityComponent
  },
  {
    path: 'commodity/edit/:id', component: EditCommodityComponent
  }
  ]
;


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommodityRoutingModule { }
