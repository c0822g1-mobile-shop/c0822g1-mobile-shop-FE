import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../../log-in/service/token.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {LoginService} from "../../../log-in/service/login.service";
import {$} from "protractor";
import {Title} from "@angular/platform-browser";
import Swal from "sweetalert2";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name = '';
  phoneNumber = '';
  email = '';
  address = '';
  age = '';
  gender = '';
  dateOfBirth = '';
  avatar = '';
  nameError = '';
  phoneNumberError = '';
  emailError = '';
  addressError = '';
  ageError = '';
  genderError = '';
  dateOfBirthError = '';
  avatarError = '';
  form = new FormGroup({
    name: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    gender: new FormControl(),
    age: new FormControl(),
    dateOfBirth: new FormControl(),
    avatar: new FormControl()
  })
  formPassword = new FormGroup({
    password: new FormControl(),
    newPassword: new FormControl(),
    confirmPassword: new FormControl()
  })
  constructor(private token: TokenService, private router: Router, private userService: LoginService,private title:Title) {

  }

  ngOnInit(): void {
    this.title.setTitle('Trang cá nhân');
    if (!this.token.isLogger()) {
      this.router.navigateByUrl('/home')
    } else {
      this.getInfo();
      this.getValue();
    }
  }

  getValue() {
    this.form.controls.name.patchValue(this.name);
    this.form.controls.phoneNumber.patchValue(this.phoneNumber);
    this.form.controls.email.patchValue(this.email);
    this.form.controls.gender.patchValue(this.gender);
    this.form.controls.address.patchValue(this.address);
    this.form.controls.age.patchValue(this.age);
    this.form.controls.dateOfBirth.patchValue(this.dateOfBirth);
    this.form.controls.avatar.patchValue(this.avatar);
  }

  getInfo() {
    this.name = this.token.getName();
    this.phoneNumber = this.token.getPhoneNumber();
    this.email = this.token.getEmail();
    this.avatar = this.token.getAvatar();
    this.address = this.token.getAddress();
    this.age = this.token.getAge();
    this.gender = this.token.getGender();
    this.dateOfBirth = this.token.getDateOfBirth();
  }

  update() {
    this.userService.updateUser(this.form.value).subscribe(next => {
      console.log(next);
      console.log('Thành công');
      this.name = this.form.controls.name.value;
      this.phoneNumber = this.form.controls.phoneNumber.value;
      this.email = this.form.controls.email.value;
      this.avatar = this.form.controls.avatar.value;
      this.address = this.form.controls.address.value;
      this.age = this.form.controls.age.value;
      this.gender = this.form.controls.gender.value;
      this.dateOfBirth = this.form.controls.dateOfBirth.value;
      this.token.setName(this.name);
      this.token.setPhoneNumber(this.phoneNumber);
      this.token.setEmail(this.email);
      this.token.setAvatar(this.avatar);
      this.token.setAddress(this.address);
      this.token.setAge(this.age);
      this.token.setGender(this.gender);
      this.token.setDateOfBirth(this.dateOfBirth);

      document.getElementById('dismiss').click()
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Chúc mừng ' + this.name + ' đã cập nhật thông tin thành công',
        showConfirmButton: false,
        timer: 2500
      })
    }, error => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Vui lòng điền đầy đủ thông tin vào ông trống',
        showConfirmButton: false,
        timer: 2500
      })
      for (let i = 0; i < error.error.length; i++) {
        if (error.error[i].field == 'name') {
          this.nameError = error.error[i].defaultMessage;
        } else if (error.error[i].field == 'phoneNumber') {
          this.phoneNumberError = error.error[i].defaultMessage;
        } else if (error.error[i].field == 'email') {
          this.emailError = error.error[i].defaultMessage;
        }else if (error.error[i].field == 'address') {
          this.addressError = error.error[i].defaultMessage;
        }else if (error.error[i].field == 'age') {
          this.ageError = error.error[i].defaultMessage;
        }else if (error.error[i].field == 'dateOfBirth') {
          this.dateOfBirthError = error.error[i].defaultMessage;
        }else if (error.error[i].field == 'avatar') {
          this.avatarError = error.error[i].defaultMessage;
        }
      }
    })
  }
  passwordError = '';
  newPasswordError = '';
  confirmPasswordError = '';
  changePassword() {
    this.passwordError = '';
    this.newPasswordError = '';
    this.confirmPasswordError = '';
    this.userService.changePassword(this.formPassword.value).subscribe(
      next => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Chúc mừng ' + this.name + ' đã cập nhật mật khẩu thành công',
          showConfirmButton: false,
          timer: 2500
        })
        document.getElementById('dismiss2').click()
      },error => {
        console.log(error)
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Thay đổi mật khẩu thất bại',
          showConfirmButton: false,
          timer: 2500
        })
        for (let i = 0; i < error.error.length; i++) {
          if (error.error[i].field == 'password') {
            this.passwordError = error.error[i].defaultMessage;
          } else if (error.error[i].field == 'newPassword') {
            this.newPasswordError = error.error[i].defaultMessage;
          } else if (error.error[i].field == 'confirmPassword') {
            this.confirmPasswordError = error.error[i].defaultMessage;
          }
        }
      }
    )
  }

}
