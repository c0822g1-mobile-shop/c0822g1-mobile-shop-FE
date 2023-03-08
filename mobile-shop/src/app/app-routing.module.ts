import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BillHistoryRoutingModule} from "./bill-history/bill-history-routing.module";
import {EmployeeGuard} from "./log-in/security/employee.guard";

// @ts-ignore
const routes: Routes = [
  {path:'', loadChildren: () => import("./home/home-routing.module").then(module => module.HomeRoutingModule)},
  {path: 'commodity',loadChildren: ()=> import("./commodity/commodity-routing.module").then(module => module.CommodityRoutingModule)},
  {path: 'login',loadChildren: ()=> import("./log-in/log-in.module").then(module => module.LogInModule)},
  {path: "information",loadChildren:()=> import("./manager-information/manager-information.module").then(module => module.ManagerInformationModule)},
  {path: "sales",loadChildren: ()=> import("./manager-sales/manager-sales.module").then(module => module.ManagerSalesModule)},
  {path: "report",loadChildren:() => import("./report/report.module").then(module => module.ReportModule)},
  {path: "supplier",loadChildren: () => import("./supplier/supplier-routing.module").then(module => module.SupplierRoutingModule)},
  {path: 'sale-report',loadChildren: () => import("./sales-report/sales-report.module").then(module => module.SalesReportModule)},
  {path: "manager", loadChildren: () => import("./manage-customer/manage-customer-routing.module").then(module => module.ManageCustomerRoutingModule)},
  {path: "warehouse", loadChildren: () => import("./warehouse/warehouse-routing.module").then(module => module.WarehouseRoutingModule)},
  {path: "bill", loadChildren: () => import("./bill/bill.module").then(module => module.BillModule)},
  {path: "sales" ,canActivate:[EmployeeGuard],loadChildren: ()=> import("./manager-sales/manager-sales.module").then(module => module.ManagerSalesModule)},
  {path: "report",canActivate:[EmployeeGuard],loadChildren:() => import("./report/report.module").then(module => module.ReportModule)},
  {path: 'sale-report',canActivate:[EmployeeGuard],loadChildren: () => import("./sales-report/sales-report.module").then(module => module.SalesReportModule)},
  {path: "supplier",canActivate:[EmployeeGuard],loadChildren: () => import("./supplier/supplier-routing.module").then(module => module.SupplierRoutingModule)},
  {path: "manager",canActivate:[EmployeeGuard], loadChildren: () => import("./manage-customer/manage-customer-routing.module").then(module => module.ManageCustomerRoutingModule)},
  {path: "warehouse",canActivate:[EmployeeGuard], loadChildren: () => import("./warehouse/warehouse-routing.module").then(module => module.WarehouseRoutingModule)},
  {path: "bill",canActivate:[EmployeeGuard], loadChildren: () => import("./bill/bill.module").then(module => module.BillModule)
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
