import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManagerListComponent} from "../manage-customer/manager-list/manager-list.component";


const routes: Routes = [
  {path:'manage',component: ManagerListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillHistoryRoutingModule { }
