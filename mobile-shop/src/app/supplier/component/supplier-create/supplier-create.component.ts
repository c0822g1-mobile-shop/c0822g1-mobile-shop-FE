import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SupplierService} from "../../../service/supplier.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Title} from "@angular/platform-browser";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})
export class SupplierCreateComponent implements OnInit {

  errors = {
    email: '', phoneNumber: '', code: '', name: '', address: ''
  };

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl("", [Validators.required, Validators.pattern("^\\d{6}$")]),
    name: new FormControl("", [Validators.required, Validators.maxLength(100)]),
    address: new FormControl("", [Validators.required, Validators.maxLength(200)]),
    phoneNumber: new FormControl("", [Validators.required, Validators.pattern("^(0|\\+84)\\d{9}$")]),
    email: new FormControl("", [Validators.required, Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")])
  });
  clickButton = false;

  constructor(private router: Router,
              private supplierService: SupplierService,
              private toastrService: ToastrService,
              private titleService: Title) {
    this.titleService.setTitle("Thêm mới nhà cung cấp");
  }

  ngOnInit(): void {
  }

  createSupplier() {
    if (this.form.valid) {
      this.supplierService.createSupplier(this.form.value).subscribe(next => {
        this.router.navigateByUrl("supplier/list")

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Thêm mới thành công!',
          showConfirmButton: false,
          timer: 2000
        });

      }, error => {

        console.log(error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Thêm mới thất bại!',
          text: 'Thêm mới thất bại vui lòng điền đúng tất cả thông tin',
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
          if (error.error && error.error[i].field === "code") {
            this.errors.code = error.error[i].defaultMessage;
          }
          if (error.error && error.error[i].field === "name") {
            this.errors.name = error.error[i].defaultMessage;
          }
          if (error.error && error.error[i].field === "address") {
            this.errors.address = error.error[i].defaultMessage;
          }
        }
      })
    } else {

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Thêm mới thất bại!',
        text: 'Thêm mới thất bại vui lòng điền đúng tất cả thông tin',
        showConfirmButton: false,
        timer: 2000
      });

      this.clickButton = true;
    }
  }

  reset() {
    this.errors.email = '';
    this.errors.phoneNumber = '';
    this.errors.code = '';
    this.errors.name = '';
    this.errors.address = '';
  }

  cancel() {
    Swal.fire({
      title: 'Hủy bỏ',
      html: 'Bạn có muốn hủy bỏ thêm mới nhà cung cấp ?',
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Hủy',
      showConfirmButton: true,
      confirmButtonText: 'Có',
      confirmButtonColor: 'red'
    }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl("/supplier/list");
        }
      }
    );
  }

}
