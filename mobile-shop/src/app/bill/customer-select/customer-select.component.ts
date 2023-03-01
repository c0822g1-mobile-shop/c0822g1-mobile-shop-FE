import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {User} from "../../entity/user";
import {CustomerInfo} from "../../entity/customer-info";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-select',
  templateUrl: './customer-select.component.html',
  styleUrls: ['./customer-select.component.css']
})
export class CustomerSelectComponent implements OnInit {

  customers: User[] = [];
  customerInfo!: CustomerInfo;
  request = {page: 0, size: 5};
  pageNumber = 0;
  totalPages = 0;
  choice = -1;
  @ViewChild("name") nameInput: any;
  @ViewChild("address") addressInput: any;
  name = '';
  address = '';
  customer: User = {};
  typeSearch = 0;
  constructor(private customerService: CustomerService,
              private router: Router,
              private titleService: Title) {
    this.titleService.setTitle('Chọn sản phẩm có sẵn.');
  }

  ngOnInit(): void {
    this.getAll(this.request);
  }

  private getAll(request: { page?: any; size?: any; } | undefined): void {
    this.name = '';
    this.address = '';
    this.customerService.getAllCustomer(request).subscribe(data => {
      this.customerInfo = data;
      this.customers = data.content;
      this.totalPages = data.totalPages;
      this.pageNumber = data.pageable.pageNumber;
    }, error => {
    }, () => {
    });
  }

  changePage(pageNumber: number) {
    this.request.page = pageNumber;
    this.ngOnInit();
  }

  search(name: string, address: string, flag: boolean) {
    if (!flag) {
      this.request.page = 0;
    }
    this.name = name;
    this.customerService.searchCustomer(name.trim(), address.trim(), this.request).subscribe(data => {
      this.customerInfo = data;
      this.customers = data.content;
      this.totalPages = data.totalPages;
      this.pageNumber = data.pageable.pageNumber;
    }, error => {
      this.customers = [];
    }, () => {
    });
  }

  selectCustomer(id: number, index: number) {
    this.customer.id = id;
    this.choice = index;
  }

  select() {
    this.customerService.findById(this.customer.id).subscribe(data => {
      this.customer = data;
    }, error => {
      this.customer = {};
    });
  }

}
