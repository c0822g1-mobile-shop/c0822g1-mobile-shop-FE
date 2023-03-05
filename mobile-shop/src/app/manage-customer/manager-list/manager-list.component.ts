import {Component, OnInit} from '@angular/core';
import {ManageListService} from "../../service/manage-list.service";
import {User} from "../../entity/user";
import {Manager} from "../../entity/manager";
import {ManageInfoJson} from "../../entity/manageInfoJson";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {
  manageList;
  nums;
  ageSearch = '0';
  genderSearch = '0';
  private page: number;
  // temp: User = {};
  user: Manager = null;
  list: Manager[] = [];
  manageInfoJson!: ManageInfoJson;
  age = '';
  gender = '';
  request = {page: 0, size: 5};
  pageNumber = 0;
  totalPages = 0;

  constructor(private managerService: ManageListService,private titleService: Title) {
    this.titleService.setTitle("Quản lý báo cáo khách hàng");
  }

  ngOnInit(): void {
    // this.getAllManageList(this.request);
    // this.getAllList();
    this.search(this.age, this.gender, true);
  }

  getAllManageList(request : {page: number, size: number}) {
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
    // this.age = age;
    // this.gender = gender;
    this.managerService.search(
      age,
      gender,
      this.request).subscribe(data => {
      this.manageInfoJson = data;
      console.log(data)
      // if ((age !== '' || gender !== '') && !flag) {
      // }
    }, error => {

      flag = true;
    }, () => {
    });
  }
  //
  // reload(): void {
  // //   this.request.page = 0;
  //   this.getAllManageList(this.request);
  // }


  changePage(pageNumber: number): void {
    this.request.page = pageNumber;
    this.search(this.age, this.gender, true);
  }
}
