import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WareHousingComponent} from "./ware-housing/ware-housing.component";


const routes: Routes = [
  {path: "" ,component: WareHousingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
