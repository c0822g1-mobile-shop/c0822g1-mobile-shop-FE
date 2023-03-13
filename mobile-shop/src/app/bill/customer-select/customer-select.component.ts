import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
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
  @Output() customer1 = new EventEmitter<User>();

  constructor(private customerService: CustomerService,
              private router: Router,
              private titleService: Title) {
    this.titleService.setTitle('Chọn sản phẩm có sẵn.');
  }

  ngOnInit(): void {
    this.getAll(this.request);
  }

  /**
   * Created by: LongPT
   * Date create: 01/03/2023
   * Function: get all customer
   * @param request
   */
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

  /**
   * Created by: LongPT
   * Date create: 01/03/2023
   * Function: pagination
   * @param pageNumber
   */
  changePage(pageNumber: number) {
    this.request.page = pageNumber;
    this.ngOnInit();
  }

  /**
   * Created by: LongPT
   * Date create: 01/03/2023
   * Function: search customer by name or address
   * @param name
   * @param address
   * @param flag
   */
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

  /**
   * Created by: LongPT
   * Date create: 01/03/2023
   * Function: select id customer
   * @param index
   * @param id
   */
  selectCustomer(id: number) {
    this.choice = id;
    this.customer.id = id;
  }

  /**
   * Created by: LongPT
   * Date create: 01/03/2023
   * Function: get by id customer
   */
  // select1() {
  //   // this.router.navigate(['/bill/search/'+ this.choice])
  //   this.customerService.findById(this.customer.id).subscribe(data => {
  //     console.log(data)
  //     this.customer = data;
  //   }, error => {
  //     this.customer = {};
  //   });
  // }
  select1() {
    this.customerService.findById(this.customer.id).subscribe(data => {
      this.customer = data;
      this.customer1.emit(data)
    }, error => {
      this.customer = {}
    });
  }
}
