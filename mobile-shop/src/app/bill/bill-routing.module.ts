import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BillCreateComponent} from "./bill-create/bill-create.component";


const routes: Routes = [
  {
    path:'', component: BillCreateComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule { }
