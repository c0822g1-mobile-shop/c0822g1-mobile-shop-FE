// @ts-ignore

import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FindSupplierService} from "../../service/find-supplier.service";
import {Supplier} from "../../entity/supplier";
import {Commodity} from "../../entity/commodity";
import {WarehousingService} from "../../service/warehousing.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2';
import {error} from "@angular/compiler/src/util";

// @ts-ignore
@Component({
  selector: 'app-ware-housing',
  templateUrl: './ware-housing.component.html',
  styleUrls: ['./ware-housing.component.css']
})
export class WareHousingComponent implements OnInit {

  set;
  findSupplier: Supplier [] = [];
  supplier: number;
  suppliers: Supplier = {
    name: ""
  };
  commodityQR: Commodity;
  form: FormGroup = new FormGroup({
    quantity: new FormControl("", [Validators.required, Validators.min(0)]),
    // supplier: new FormControl("", [Validators.required]),
  });
  nums;


  constructor(private findSupplierService: FindSupplierService,
              private wareHousingService: WarehousingService) {
    this.getAllSupplier(name)
    console.log(this.supplier)
    if (this.supplier != null) {
      this.findSupplierv2(this.supplier)
    }
  }

  ngOnInit(): void {
  }

  getAllSupplier(name: string) {
    this.findSupplierService.getAllSupplier(name).subscribe(data => {
      this.findSupplier = data;
      console.log(data)
    })
  }

  findSupplierv2(id: number) {
    this.findSupplierService.findSupplier2(id).subscribe(next => {
      console.log(next)
    })
  }

  search(name: string) {
    this.findSupplierService.getAllSupplier(name).subscribe(data => {
      this.findSupplier = data;
    })
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
        title: 'Nhập kho thành công!',
        showConfirmButton: false,
        timer: 2000
      });
    }, error => {
      console.log(error);
    });
  }
}
