import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SupplierCreateComponent} from "./component/supplier-create/supplier-create.component";
import {SupplierUpdateComponent} from "./component/supplier-update/supplier-update.component";
import {SupplierListComponent} from "./component/supplier-list/supplier-list.component";
import {EmployeeGuard} from "../log-in/security/employee.guard";


const routes: Routes = [
  {path: "supplier/create", component: SupplierCreateComponent,canActivate:[EmployeeGuard]},
  {path: "supplier/edit/:id", component: SupplierUpdateComponent,canActivate:[EmployeeGuard]},
  {path: "supplier/edit", component: SupplierUpdateComponent,canActivate:[EmployeeGuard]},
  {path: 'list', component: SupplierListComponent,canActivate:[EmployeeGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule {
}
