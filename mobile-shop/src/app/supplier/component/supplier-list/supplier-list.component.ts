import {Component, OnInit} from '@angular/core';
import {SupplierService} from "../../../service/supplier.service";
import {Supplier} from "../../../entity/supplier";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  supplierList;
  temp: Supplier = {};
  search = '';
  supplier: Supplier = null;
  private page = 0;
  nums;

  constructor(private router: Router, private toastrService: ToastrService, private supplierService: SupplierService,
              private titleService: Title) {
    this.titleService.setTitle("Nhà cung cấp");
  }

  ngOnInit(): void {
    this.getAll(0);
  }

  getAll(page: number) {
    debugger
    this.supplierService.getAll(this.search, page).subscribe(next => {
      console.log(next)
      if (next['content'].length == 0) {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Không tìm thấy',
          text: 'Kết quả bạn cần tìm là: ' + '" ' + this.search + ' " ' + ' không có',
          showConfirmButton: false,
          timer: 2000

        })}
      this.supplierList = next;
      // @ts-ignore
      this.nums = Array.from(Array(next.totalPages).keys());
    });
  }

  delete() {
    this.supplierService.delete(this.supplier).subscribe(next => {
      this.supplier = null;
      this.getAll(0);
      // alert('Xoá thành công !!!');
      this.toastrService.success("Xóa thành công", "Thông Báo")
    });
  }

  update() {
    this.router.navigateByUrl("supplier/edit/" + this.supplier.id)
  }
}
