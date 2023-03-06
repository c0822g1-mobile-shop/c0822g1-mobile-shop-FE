import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SupplierCreateComponent} from "./component/supplier-create/supplier-create.component";
import {SupplierUpdateComponent} from "./component/supplier-update/supplier-update.component";
import {SupplierListComponent} from "./component/supplier-list/supplier-list.component";


const routes: Routes = [
  {path: "supplier/create", component: SupplierCreateComponent},
  {path: "supplier/edit/:id", component: SupplierUpdateComponent},
  {path: "supplier/edit", component: SupplierUpdateComponent},
  {path: 'list', component: SupplierListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule {
}
