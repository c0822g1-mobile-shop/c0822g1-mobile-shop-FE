import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesReportRoutingModule } from './sales-report-routing.module';
import { SalesReportComponent } from './sales-report/sales-report.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [SalesReportComponent],
  exports: [
    SalesReportComponent
  ],
    imports: [
        CommonModule,
        SalesReportRoutingModule,
        FormsModule
    ]
})
export class SalesReportModule { }
