import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../entity/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Commodity} from "../../entity/commodity";
import {ActivatedRoute, Router} from "@angular/router";
import {BillService} from "../../service/bill/bill.service";
import {Title} from "@angular/platform-browser";
import {BillHistory} from "../../entity/bill-history";
// @ts-ignore
import Swal from 'sweetalert2';


@Component({
  selector: 'app-bill-create',
  templateUrl: './bill-create.component.html',
  styleUrls: ['./bill-create.component.css']
})
export class BillCreateComponent implements OnInit {
  @Input()
  customer: User = {};
  eventSelected = new EventEmitter();
  @Input()
  commodity: Commodity = {};
  eventSelected2 = new EventEmitter();
  billHistory: BillHistory = {};
  user: User[] = [];
  formCreateBill: FormGroup = new FormGroup({});
  userId: number;
  commodityId: number;
  userInfo:User={
    // name:"Quốc Trung",
    // phoneNumber:"123456789",
    // address:"ĐN",
    // age:20,
    // email:"trung@gmail.com",
  };

  constructor(private billService: BillService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private title: Title) {
    this.title.setTitle("Quản lý bán hàng");

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
  }

  saveBill():void{
    this.billService.saveBill(this.commodityId, this.userId).subscribe(() =>{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Thanh toán thành công!'
      }).then(r => location.replace(''))

      // this.router.navigateByUrl("cart");
    }, error => {
      console.log(error);
    });
  }

  choiseCustomer(value: string) {
    this.userId=Number(value);
    this.billService.findById(this.userId).subscribe(data=>{
      this.userInfo=data;
    })
  }
}
