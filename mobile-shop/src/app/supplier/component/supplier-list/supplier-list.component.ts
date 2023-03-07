import {Component, OnInit} from '@angular/core';
import {SupplierService} from "../../../service/supplier.service";
import {Supplier} from "../../../entity/supplier";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import Swal from 'sweetalert2';
import {TokenService} from "../../../log-in/service/token.service";

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
  role = 'none'
  constructor(private token:TokenService,private router: Router, private toastrService: ToastrService, private supplierService: SupplierService,
              private titleService: Title) {
    this.titleService.setTitle("Nhà cung cấp");
  }

  ngOnInit(): void {
    this.getAll(0);

  }

  getAll(page: number) {
   this.role = this.token.getRole()
    this.supplierService.getAll(this.search, page).subscribe(next => {
      console.log(next)
      // console.log(next)
      // this.supplierList = next;
      // console.log(this.supplierList)
      // // @ts-ignore
      // this.nums = Array.from(Array(next.totalPages).keys());

      if (next['content'].length == 0) {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Không tìm thấy',
          text: 'Kết quả bạn cần tìm là: ' + '" ' + this.search + ' " ' + ' không có',
          showConfirmButton: false,
          timer: 2000

        })
      } else {
        this.supplierList = next;
        // @ts-ignore
        this.nums = Array.from(Array(next.totalPages).keys());
      }

    });

  }

  delete(supplier: Supplier) {
    // this.supplierService.delete(this.supplier).subscribe(next => {
    //   this.supplier = null;
    //   this.getAll(0);
    //   // alert('Xoá thành công !!!');
    //   this.toastrService.success("Xóa thành công", "Thông Báo")
    // });

    Swal.fire({
      title: 'Bạn có muốn xóa?',
      text: 'Nhà cung cấp: ' + this.supplier?.name,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có',
      cancelButtonText: 'Không'
    }).then((result) => {
      if (result.isConfirmed) {
        this.supplierService.delete(supplier).subscribe(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Xóa thành công!',
            text: 'Nhà cung cấp: ' + supplier.name,
            showConfirmButton: false,
            timer: 3000
          });
          // @ts-ignore
          this.getAll();
        }, error => {
          console.log(error);
        });
      }
    });
  }


  update() {
    this.router.navigateByUrl("supplier/edit/" + this.supplier.id)
  }
}
