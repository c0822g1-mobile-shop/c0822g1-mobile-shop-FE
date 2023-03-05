import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../log-in/service/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  isLogger = false;
  constructor(private token:TokenService,private router:Router) { }

  ngOnInit(): void {
    this.isLogger = this.token.isLogger();
  }

}
