import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesReportRoutingModule } from './sales-report-routing.module';
import { SalesReportComponent } from './sales-report/sales-report.component';


@NgModule({
  declarations: [SalesReportComponent],
  exports: [
    SalesReportComponent
  ],
  imports: [
    CommonModule,
    SalesReportRoutingModule
  ]
})
export class SalesReportModule { }
