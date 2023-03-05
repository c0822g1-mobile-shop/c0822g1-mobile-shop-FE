import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillHistoryRoutingModule } from './bill-history-routing.module';
import { BillHistoryListComponent } from './bill-history-list/bill-history-list.component';


@NgModule({
  declarations: [BillHistoryListComponent],
  imports: [
    CommonModule,
    BillHistoryRoutingModule
  ]
})
export class BillHistoryModule { }
