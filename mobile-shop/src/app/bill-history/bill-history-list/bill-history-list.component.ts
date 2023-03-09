import {Component, OnInit} from '@angular/core';
import {BillHistoryService} from "../../service/bill-history.service";
import {BillHistory} from "../../entity/bill-history";
import {ActivatedRoute} from "@angular/router";
import {ManageListService} from "../../service/manage-list.service";
import {User} from "../../entity/user";
import {BillHistoryInfo} from "../../entity/bill-history-info";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-bill-history-list',
  templateUrl: './bill-history-list.component.html',
  styleUrls: ['./bill-history-list.component.css']
})
export class BillHistoryListComponent implements OnInit {


  billHistory: BillHistory;
  id: number;
  item: User;
  billList;
  billHistoryInfos: BillHistoryInfo[] = [];
  billHistoryInfo: BillHistoryInfo = {};

  constructor(private title: Title,private billHistoryService: BillHistoryService,
              private activatedRoute: ActivatedRoute,
              private manageListService: ManageListService) {
    this.activatedRoute.paramMap.subscribe(next => {
      this.id = +next.get('id');
      this.getByIdManage(this.id);
      console.log(this.id);


    });
  }

  ngOnInit(): void {
    this.title.setTitle("Chi tiết lịch sử mua hàng")
  }

// phương thức lấy theo id
  getByIdManage(id: number) {
    this.billHistoryService.findById(id).subscribe(next => {
      this.billHistoryInfos = next;
      console.log(this.billHistoryInfos);
      this.billHistoryInfo = this.billHistoryInfos[0];
    })
  }
}
