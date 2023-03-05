import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path:'home', loadChildren: () => import("./home/home.module").then(module => module.HomeModule)},
  {path: 'commodity',loadChildren: ()=> import("./commodity/commodity-routing.module").then(module => module.CommodityRoutingModule)},
  {path: 'login',loadChildren: ()=> import("./log-in/log-in.module").then(module => module.LogInModule)},
  {path: "information",loadChildren:()=> import("./manager-information/manager-information.module").then(module => module.ManagerInformationModule)},
  {path: "sales",loadChildren: ()=> import("./manager-sales/manager-sales.module").then(module => module.ManagerSalesModule)},
  {path: "report",loadChildren:() => import("./report/report.module").then(module => module.ReportModule)},
  {path: "supplier",loadChildren: () => import("./supplier/supplier.module").then(module => module.SupplierModule)},
  {path: 'sale-report',loadChildren: () => import("./sales-report/sales-report.module").then(module => module.SalesReportModule)},
  {path: "warehouse", loadChildren: () => import("./warehouse/warehouse-routing.module").then(module => module.WarehouseRoutingModule)},
  {path: "bill", loadChildren: () => import("./bill/bill.module").then(module => module.BillModule)
  }



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
