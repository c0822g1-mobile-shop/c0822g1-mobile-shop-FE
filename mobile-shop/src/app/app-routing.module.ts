import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BillHistoryRoutingModule} from "./bill-history/bill-history-routing.module";


const routes: Routes = [
  {path:'home', loadChildren: () => import("./home/home.module").then(module => module.HomeModule)},
  {path: 'commodity',loadChildren: ()=> import("./commodity/commodity.module").then(module => module.CommodityModule)},
  {path: 'login',loadChildren: ()=> import("./log-in/log-in.module").then(module => module.LogInModule)},
  {path: "information",loadChildren:()=> import("./manager-information/manager-information.module").then(module => module.ManagerInformationModule)},
  {path: "sales",loadChildren: ()=> import("./manager-sales/manager-sales.module").then(module => module.ManagerSalesModule)},
  {path: "report",loadChildren:() => import("./report/report.module").then(module => module.ReportModule)},
  {path: "supplier",loadChildren: () => import("./supplier/supplier.module").then(module => module.SupplierModule)},
  {path: "warehouse", loadChildren: () => import("./warehouse/warehouse.module").then(module => module.WarehouseModule)},
  {path: "manager", loadChildren: () => import("./manage-customer/manage-customer-routing.module").then(module => module.ManageCustomerRoutingModule)},
  // {path: "bill-history/list/:id", loadChildren: () => import("./bill-history/bill-history-routing.module").then(module => module.BillHistoryRoutingModule)},
  // {path: "bill-history/list/:id",component: BillHistoryRoutingModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
