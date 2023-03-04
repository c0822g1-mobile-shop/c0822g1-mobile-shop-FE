import { Component, OnInit } from '@angular/core';
import {FindSupplierService} from "../../service/find-supplier.service";
import {Supplier} from "../../entity/supplier";

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

  constructor(private findSupplierService: FindSupplierService) {
    this.getAllSupplier(name)
    console.log(this.supplier)

    if (this.supplier != null){
      this.findSupplierv2(this.supplier)
    }

  }

  ngOnInit(): void {
  }

  getAllSupplier(name: string) {
    this.findSupplierService. getAllSupplier(name).subscribe(data =>{
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
    this.findSupplierService.getAllSupplier(name).subscribe(data =>{
      this.findSupplier = data;
    })
  }
}
