import {Component, OnInit} from '@angular/core';
import {CommodityService} from "../../service/commodity/commodity.service";
import {Commodity} from "../../entity/commodity";
import {log} from "util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  commoditiesByQuantitySold: Commodity[];
  numberQuantitySold: number = 0;
  totalPagesQuantitySold: number;
  firstPageQuantitySold: boolean;
  lastPageQuantitySold: boolean;

  commodities: Commodity[];
  number: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
  message = '';


  constructor(private commodityService: CommodityService) {
    this.getCommodityByQuantitySold(0);
    this.searchCommodity(this.commodityService.getNameSearch(), 0);
  }

  ngOnInit(): void {
  }


  getCommodityByQuantitySold(page: number) {
    this.commodityService.getAllByQuantity(page).subscribe(data => {
      console.log(data);
      this.commoditiesByQuantitySold = data.content;
      this.numberQuantitySold = data.number;
      this.totalPagesQuantitySold = data.totalPages;
      this.firstPageQuantitySold = data.first;
      this.lastPageQuantitySold = data.last;
    });
  }

  searchCommodity(name: string, page: number) {
    this.commodityService.searchCommodityByName(name, page).subscribe(data => {
        console.log(data);
        this.commodities = data.content;
        this.numberQuantitySold = data.number;
        this.totalPages = data.totalPages;
        this.firstPage = data.first;
        this.lastPage = data.last;
        this.message = ''
      }, error => {
        this.message = "Không tìm thấy kết quả nào";
      }
    );
  }
}
