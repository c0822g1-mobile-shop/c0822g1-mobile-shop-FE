
import {TokenService} from "../../log-in/service/token.service";
import loader from "@angular-devkit/build-angular/src/angular-cli-files/plugins/single-test-transform";
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ShareService} from "../../log-in/service/share.service";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role = 'none';
  name = 'Thông tin cá nhân'
  isLogged = false;
  constructor(private token: TokenService,private router: Router,private share: ShareService) {
  }



  ngOnInit(): void {
    this.loader();
    this.share.getClickEvent().subscribe(() => {
      this.loader();
    })
  }
  loader() {
    this.isLogged = this.token.isLogger()
    if (this.isLogged) {
      this.name = this.token.getName();
      this.role = this.token.getRole();
    }
  }
  logout() {
    this.role = 'none';
    this.name = 'Thông tin cá nhân';
    this.isLogged = false;
    this.token.logout();
    this.router.navigateByUrl('/home');
  }


  checkProfile() {
    if (!this.isLogged) {
      this.router.navigateByUrl('/login')
    } else {
      this.router.navigateByUrl('/profile')
    }
  }
  search1(value: string) {

    this.share.sendClickEvent()
    this.router.navigate(['home', value])
  }
}
