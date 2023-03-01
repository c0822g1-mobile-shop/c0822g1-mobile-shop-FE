import { Component, OnInit } from '@angular/core';
import {SupplierService} from "../../service/supplier.service";
import {Supplier} from "../../../entity/supplier";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  supplierList;
  temp: Supplier = {};
  search = '';
  supplier: Supplier = null;
  private page: number;
  nums;

  constructor(private supplierService: SupplierService) {
  }

  ngOnInit(): void {
    this.getAll(0);
  }

  getAll(page: number) {
    this.supplierService.getAll(this.search, page).subscribe(next => {
      this.supplierList = next;
      // @ts-ignore
      this.nums = Array.from(Array(next.totalPages).keys());
    });
  }

  delete() {
    this.supplierService.delete(this.supplier).subscribe(next => {
      this.supplier = null;
      this.getAll(0);
      alert('Xoá thành công !!!');
    });
  }
}
