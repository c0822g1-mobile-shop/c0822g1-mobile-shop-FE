import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {User} from "../../entity/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Commodity} from "../../entity/commodity";
import {ActivatedRoute, Router} from "@angular/router";
import {BillService} from "../../service/bill/bill.service";
import {Title} from "@angular/platform-browser";
import {BillHistory} from "../../entity/bill-history";
import Swal from 'sweetalert2';
import {CustomerService} from "../../service/customer.service";


@Component({
  selector: 'app-bill-create',
  templateUrl: './bill-create.component.html',
  styleUrls: ['./bill-create.component.css']
})
export class BillCreateComponent implements OnInit {
  customer1: User = {};
  eventSelected = new EventEmitter();
  @Input()
  commodity: Commodity = {};
  eventSelected2 = new EventEmitter();
  billHistory: BillHistory = {};
  user: User[] = [];
  quantity?: number = 0;
  total: number = 0;
  formCreateBill: FormGroup = new FormGroup({});
  userId: number;
  commodityId: number;
  userInfo: User = {
    // name:"Quốc Trung",
    // phoneNumber:"123456789",
    // address:"ĐN",
    // age:20,
    // email:"trung@gmail.com",
  };

  constructor(private userService: CustomerService, private billService: BillService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private title: Title) {

    this.formCreateBill = new FormGroup({
      id: new FormControl(this.billHistory.id),
      idCommodity: new FormControl(this.billHistory.idCommodity),
      billId: new FormControl(this.billHistory.billId),
      name: new FormControl(this.billHistory.user?.name, [Validators.required, Validators.pattern('^[AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+ [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+(?: [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*)*$')]),
      phoneNumber: new FormControl(this.billHistory.user?.phoneNumber),
      address: new FormControl(this.billHistory.user?.address),
      age: new FormControl(this.billHistory.user?.age),
      email: new FormControl(this.billHistory.user?.email),

      commodityName: new FormControl(this.billHistory.commodity?.name),
      price: new FormControl(this.billHistory.commodity?.price),
      quantity: new FormControl(this.billHistory.commodity?.quantity),
      moneyTotal: new FormControl(this.billHistory.bill?.moneyTotal),
      paymentMethod: new FormControl(this.billHistory.bill?.paymentMethod),
      billPrint: new FormControl(this.billHistory.bill?.billPrint),
      // user: new FormControl('')
      // commodity: new FormControl('')
    });
    this.formCreateBill.patchValue(this.userInfo);
    // this.activatedRoute.paramMap.subscribe(data =>{
    //   const id = data.get('id');
    //   if (id != null) {
    //     this.get....(+id);
    //   }
    // })
  }

  ngOnInit(): void {
    this.title.setTitle("Quản lý bán hàng");

    this.activatedRoute.paramMap.subscribe(
      next => {
        let id = next.get('id');
        console.log(id)
        this.userService.findById(parseInt(id)).subscribe(
          next => {
            this.customer1 = next;
          }
        )
      }
    )
  }

  saveBill(): void {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thanh toán thành công với tổng tiền là : ' + this.total,
        color: 'red',
        text: name,
        showConfirmButton: false,
        timer: 2000
      }
    );
    this.formCreateBill.reset()
    this.total = 0;
  }

  choiseCustomer(value: string) {
    this.userId = Number(value);
    this.billService.findById(this.userId).subscribe(data => {
      this.userInfo = data;
    })
  }

  getCustomer(customer: User) {
    console.log(customer)
    this.customer1 = customer;
  }

  getCommodity(commodity: Commodity) {
    this.commodity = commodity;
  }

  change(value: string) {
    this.quantity = parseInt(value);
    this.total = this.quantity * this.commodity.price;
  }

}
