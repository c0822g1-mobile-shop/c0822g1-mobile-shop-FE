import {Component, OnInit} from '@angular/core';
import {ManageListService} from "../../service/manage-list.service";
import {User} from "../../entity/user";

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {
  manageList;
  nums;
  ageSearch = '';
  genderSearch = '';
  private page: number;
  // temp: User = {};
  user: User = null;

  constructor(private managerService: ManageListService) {
  }

  ngOnInit(): void {
    this.getAllManageList(0);
  }

  getAllManageList(page: number) {
    this.managerService.getAllManageList(this.ageSearch, this.genderSearch, page).subscribe(next => {
      this.manageList = next;
      this.nums = Array.from(Array(next.totalPages).keys());
    });
  }
}
