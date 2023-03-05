
import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../log-in/service/token.service";

import {Commodity} from "../../entity/commodity";
import {ActivatedRoute, Router} from "@angular/router";
import {CommodityService} from "../../service/commodity.service";


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
  isLogger = false;

  /**
   * Create by: PhucNT
   *
   * Date created: 01/03/2023
   */

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
  nameSearch = '';
  commodity: Commodity = {};

  constructor(private token:TokenService,private router:Router,private commodityService: CommodityService, private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.paramMap.subscribe(
      next => {
        this.nameSearch = next.get('name');
        this.searchCommodity(this.nameSearch, 0);
      }
    )
    this.getCommodityByQuantitySold(0);
  }


  ngOnInit(): void {
    this.isLogger = this.token.isLogger();
  }


  getCommodityByQuantitySold(page: number) {
    this.commodityService.getAllByQuantitySold(page).subscribe(data => {
      this.commoditiesByQuantitySold = data.content;
      this.numberQuantitySold = data.number;
      this.totalPagesQuantitySold = data.totalPages;
      this.firstPageQuantitySold = data.first;
      this.lastPageQuantitySold = data.last;
    });
  }


  searchCommodity(name: string, page: number) {
    this.commodityService.searchCommodityByName(name, page).subscribe(data => {
        this.commodities = data.content;
        this.number = data.number;
        this.totalPages = data.totalPages;
        this.firstPage = data.first;
        this.lastPage = data.last;
      }, error =>{
        this.route.navigateByUrl('/error/' + error.error);
      }
    );
  }

  watchDetail(commodity: Commodity) {
    this.commodity = commodity;
  }

}
