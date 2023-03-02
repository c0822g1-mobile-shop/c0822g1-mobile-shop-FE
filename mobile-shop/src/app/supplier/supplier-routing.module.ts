import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SupplierListComponent} from "./component/supplier-list/supplier-list.component";


const routes: Routes = [
  {path: 'list', component: SupplierListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule {
}
