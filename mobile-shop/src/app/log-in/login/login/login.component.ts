import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";
import {ShareService} from "../../service/share.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = 'Thông tin cá nhân';
  message = ''
  nameError = '';
  usernameError = '';
  emailError = '';
  passwordError = '';
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    rememberMe: new FormControl(true)
  })
  registerForm = new FormGroup({
    username: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    roles: new FormControl('customer')
  });

  constructor(private loginService: LoginService, private token: TokenService, private router: Router, private share: ShareService) {
  }

  ngOnInit(): void {

  }

  login() {
    this.loginService.login(this.form.value).subscribe(next => {
        if (this.form.controls.rememberMe.value) {
          this.token.rememberMe(next.token, next.id, next.name, next.username, next.phoneNumber, next.email, next.address, next.age,
            next.gender, next.dateOfBirth, next.avatar, next.roles, 'local');

        } else {
          this.token.rememberMe(next.token, next.id, next.name, next.username, next.phoneNumber, next.email, next.address, next.age,
            next.gender, next.dateOfBirth, next.avatar, next.roles, 'session');
        }
        this.share.sendClickEvent();
        this.router.navigateByUrl('/home')
      }, error => {
        this.message = error.error.message
      }
    )
  }

  register() {
    this.nameError = '';
    this.usernameError = '';
    this.emailError = '';
    this.passwordError = '';
    this.loginService.register(this.registerForm.value).subscribe(next => {
      document.getElementById('dismiss').click();
    }, error => {
      for (let i = 0; i < error.error.length; i++) {
        if (error.error[i].field == 'name') {
          this.nameError = error.error[i].defaultMessage;
        } else if (error.error[i].field == 'username') {
          this.usernameError = error.error[i].defaultMessage;
        } else if (error.error[i].field == 'email') {
          this.emailError = error.error[i].defaultMessage;
        } else if (error.error[i].field == 'password') {
          this.passwordError = error.error[i].defaultMessage;
        }
      }
    })
  }
}
