import {Component, OnInit} from '@angular/core';
import {ManageListService} from "../../service/manage-list.service";
import {User} from "../../entity/user";
import {Manager} from "../../entity/manager";
import {ManageInfoJson} from "../../entity/manageInfoJson";
import {Title} from "@angular/platform-browser";
import Swal from "sweetalert2";

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {
  choise: any;
  manageList;
  nums;
  private page: number;
  user: Manager = null;
  list: Manager[] = [];
  manageInfoJson!: ManageInfoJson;
  age = '';
  gender = '';
  request = {page: 0, size: 5};
  totalPages = 0;

  constructor(private managerService: ManageListService, private titleService: Title) {
    this.titleService.setTitle("Quản lý báo cáo khách hàng");
  }

  ngOnInit(): void {
    this.search(this.age, this.gender, true);
  }

  getAllManageList(request: { page: number, size: number }) {
    this.managerService.getAllManageList(request).subscribe(next => {
      this.manageList = next;
      this.list = next;
      this.nums = Array.from(Array(next.totalPages).keys());
      this.manageInfoJson = next;
    });
  }


  getAllList() {
    this.managerService.getAllManager().subscribe(next => {
      this.list = next;
    })
  }

  search(age: string, gender: string, flag: boolean) {
    console.log(age);
    console.log(gender);
    if (!flag) {
      this.request.page = 0;
    }
    this.managerService.search(
      age,
      gender,
      this.request).subscribe(data => {

        if (data['content'].length == 0) {
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Không tìm thấy',
            text: 'Kết quả bạn cần tìm không có',
            showConfirmButton: false,
            timer: 2000
          });
        } else {
          this.manageList = data; this.manageInfoJson = data;
          // @ts-ignore
          this.nums = Array.from(Array(next.totalPages).keys());
        }
      }
    );
  }



  changePage(pageNumber: number): void {
    this.request.page = pageNumber;
    this.search(this.age, this.gender, true);
  }

  getAll() {
    this.getAllManageList(this.request);
  }
}
