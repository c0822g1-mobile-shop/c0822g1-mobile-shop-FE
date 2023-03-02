import { Component, OnInit } from '@angular/core';
import {CommodityService} from "../../service/commodity.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']})
export class HeaderComponent implements OnInit {

  nameSearch = '';

  constructor() { }

  ngOnInit(): void {
  }

}
