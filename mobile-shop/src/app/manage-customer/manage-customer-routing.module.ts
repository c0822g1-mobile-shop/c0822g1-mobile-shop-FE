import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ManagerListComponent} from "./manager-list/manager-list.component";
import {CommonModule} from "@angular/common";
import {BillHistoryListComponent} from "../bill-history/bill-history-list/bill-history-list.component";


const routes: Routes = [
  {path: '', component: ManagerListComponent},
  {path: 'bill-history/:id', component: BillHistoryListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCustomerRoutingModule {
}
