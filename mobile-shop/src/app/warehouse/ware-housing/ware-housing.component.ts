// @ts-ignore

import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FindSupplierService} from "../../service/find-supplier.service";
import {Supplier} from "../../entity/supplier";
import {Commodity} from "../../entity/commodity";
import {WarehousingService} from "../../service/warehousing.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-ware-housing',
  templateUrl: './ware-housing.component.html',
  styleUrls: ['./ware-housing.component.css']
})
export class WareHousingComponent implements OnInit {
  findSupplier: Supplier [] = [];
  supplier: number;
  suppliers: Supplier = {
    name: ""
  };


  commodityQR: Commodity;
  form: FormGroup = new FormGroup({
    quantity: new FormControl("", [Validators.required, Validators.min(0)]),
  });
  page;
  nums;
  commodity: any;



  constructor(private findSupplierService: FindSupplierService,
              private wareHousingService: WarehousingService,
              private router:Router) {
    this.getAllSupplier(name,0)
    console.log(this.supplier)
    if (this.supplier != null) {
      this.findSupplierv2(this.supplier)
    }

  }

  ngOnInit(): void {
  }

  getAllSupplier(name: string, page: number) {
    // @ts-ignore
    this.findSupplierService.getAllSupplier(name, page).subscribe(data => {
      this.findSupplier = data;
      console.log(data)
    })
  }

  findSupplierv2(id: number) {
    this.findSupplierService.findSupplier2(id).subscribe(next => {
      console.log(next)
    })
  }

  nextPage() {
    this.findSupplierService.changePage(this.findSupplier['number']+1).subscribe(next => {
      this.findSupplier = next;
    })
  }

  previousPage() {
    this.findSupplierService.changePage(this.findSupplier['number']-1).subscribe(next => {
      this.findSupplier = next;
    })
  }

  search(name: string, page: number) {
    this.findSupplierService.getAllSupplier(name,page).subscribe(data => {
      if (data['content'].length == 0) {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Kh??ng t??m th???y',
          text: 'K???t qu??? b???n c???n t??m kh??ng c??',
          showConfirmButton: false,
          timer: 2000
        });
      } else {
        this.findSupplier = data;
        // @ts-ignore
        this.nums = Array.from(Array(next.totalPages).keys());
      }

    });
    }


  handleQrCodeResult(commodity: Commodity) {
    this.commodityQR = commodity;
    console.log(this.commodityQR)
  }

  save(id: number, quantity: number) {

    this.wareHousingService.wareHousing(id, quantity).subscribe(next => {
      console.log(next)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Nh???p kho th??nh c??ng!',
        showConfirmButton: false,
        timer: 2000
      });
      this.router.navigateByUrl('/commodity/list')
    }, error => {
      console.log(error);
    });
  }


}
