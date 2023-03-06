import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ShareService} from "../../log-in/service/share.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router:Router,private share:ShareService) {
  }

  ngOnInit(): void {
  }

  search1(value: string) {

    this.share.sendClickEvent()
    this.router.navigate(['home', value])
  }
}
