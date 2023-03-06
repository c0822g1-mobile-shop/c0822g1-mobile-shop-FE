import {Component, Input, OnInit} from '@angular/core';

import {Commodity} from "../../entity/commodity";
import {ActivatedRoute, Router} from "@angular/router";
import {CommodityService} from "../../service/commodity.service";
import Swal from 'sweetalert2';
import {ShareService} from "../../log-in/service/share.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

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

  constructor(private commodityService: CommodityService, private activatedRoute: ActivatedRoute, private shareService: ShareService) {
    this.activatedRoute.paramMap.subscribe(
      next => {
        this.searchCommodity(next.get('name'), 0);
      }
    );
    this.getCommodityByQuantitySold(0);
  }

  ngOnInit(): void {

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
    }, error => {
      Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Không tìm thấy tìm kiếm nào của bạn',
          color: 'red',
          text: name,
          showConfirmButton: true,
          timer: 10000
        }
      );
    });
  }

  watchDetail(commodity: Commodity) {
    this.commodity = commodity;
  }

}
