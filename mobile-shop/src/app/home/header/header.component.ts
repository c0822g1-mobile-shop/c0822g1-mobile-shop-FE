import { Component, OnInit } from '@angular/core';
import {CommodityService} from "../../service/commodity/commodity.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']})
export class HeaderComponent implements OnInit {


  constructor(private commodityService: CommodityService) { }

  ngOnInit(): void {
  }

  searchCommodity(name: string) {
    this.commodityService.setNameSearch(name);
  }
}
