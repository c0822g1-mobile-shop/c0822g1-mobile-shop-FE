import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SupplierService} from "../../../service/supplier.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

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
    email: new FormControl("", [Validators.required, Validators.pattern("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$")])
  });

  constructor(private router: Router, private supplierService: SupplierService, private toastrService: ToastrService) {
  }

  ngOnInit(): void {
  }

  createSupplier() {
    if (this.form.valid) {
      this.supplierService.createSupplier(this.form.value).subscribe(next => {
        this.router.navigateByUrl("supplier/list")
        this.toastrService.success("Thêm mới thành công", "Thông báo")
      }, error => {
        console.log(error);
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
    }
  }

}
