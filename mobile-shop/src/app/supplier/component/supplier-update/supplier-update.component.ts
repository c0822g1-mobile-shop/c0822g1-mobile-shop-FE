import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SupplierService} from "../../../service/supplier.service";
import {ToastrService} from "ngx-toastr";
import {Title} from "@angular/platform-browser";
import Swal from "sweetalert2";

@Component({
  selector: 'app-supplier-update',
  templateUrl: './supplier-update.component.html',
  styleUrls: ['./supplier-update.component.css']
})
export class SupplierUpdateComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl(),
    name: new FormControl("", [Validators.required, Validators.maxLength(100)]),
    address: new FormControl("", [Validators.required, Validators.maxLength(200)]),
    phoneNumber: new FormControl("", [Validators.required, Validators.pattern("^(0|\\+84)\\d{9}$")]),
    email: new FormControl("", [Validators.required, Validators.pattern("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$")])
  });

  clickButton = false;

  errors = {
    email: '', phoneNumber: '', name: '', address: ''
  };

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private supplierService: SupplierService,
              private toastrService: ToastrService,
              private titleService: Title) {

    this.titleService.setTitle("Chỉnh sửa nhà cung cấp");

    this.activatedRoute.paramMap.subscribe(next => {
      const id = +next.get("id")
      this.getSupplier(id);
    });

  }

  ngOnInit(): void {
  }

  getSupplier(id: number) {
    this.supplierService.findSupplier(id).subscribe(next => {
      this.form.patchValue(next);
    }, error => {

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Không tìm thấy nhà cung cấp!',
        text: 'Vui lòng làm mới trang và thử lại',
        showConfirmButton: false,
        timer: 2000
      });

      this.router.navigateByUrl("supplier/list")

    })
  }

  updateSupplier() {
    if (this.form.valid) {
      this.supplierService.updateSupplier(this.form.value).subscribe(next => {
        this.router.navigateByUrl("supplier/list")

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Chỉnh sửa thành công!',
          showConfirmButton: false,
          timer: 2000
        });

      }, error => {

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Chỉnh sửa thất bại!',
          text: 'Chỉnh sửa thất bại vui lòng điền đúng tất cả thông tin',
          showConfirmButton: false,
          timer: 2000
        });

        for (let i = 0; i < error.error.length; i++) {
          if (error.error && error.error[i].field === "email") {
            this.errors.email = error.error[i].defaultMessage;
          }
          if (error.error && error.error[i].field === "phoneNumber") {
            this.errors.phoneNumber = error.error[i].defaultMessage;
          }
          if (error.error && error.error[i].field === "name") {
            this.errors.name = error.error[i].defaultMessage;
          }
          if (error.error && error.error[i].field === "address") {
            this.errors.address = error.error[i].defaultMessage;
          }
        }
      });
    } else {

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Chỉnh sửa thất bại!',
        text: 'Chỉnh sửa thất bại vui lòng điền đúng tất cả thông tin',
        showConfirmButton: false,
        timer: 2000
      });

      this.clickButton = true;
    }
  }

  reset() {
    this.errors.email = '';
    this.errors.phoneNumber = '';
    this.errors.name = '';
    this.errors.address = '';
  }
}
