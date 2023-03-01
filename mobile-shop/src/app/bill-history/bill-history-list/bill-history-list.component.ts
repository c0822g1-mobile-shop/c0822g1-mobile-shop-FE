import {Component, OnInit} from '@angular/core';
import {BillHistoryService} from "../../service/bill-history.service";
import {BillHistory} from "../../entity/bill-history";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bill-history-list',
  templateUrl: './bill-history-list.component.html',
  styleUrls: ['./bill-history-list.component.css']
})
export class BillHistoryListComponent implements OnInit {
  billHistory: BillHistory;
  id: number;

  constructor(private billHistoryService: BillHistoryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAllBillHistory();
  }

  getAllBillHistory() {
    this.billHistoryService.getAllBillHistory(this.id).subscribe(next =>{
      this.billHistory = next;
    });
  }
}
