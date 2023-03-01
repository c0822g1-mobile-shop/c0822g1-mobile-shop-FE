import {Component, OnInit, ViewChild} from '@angular/core';
import {CommodityService} from "../../service/commodity.service";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Commodity} from "../../entity/commodity";
import {CommodityJson} from "../../entity/commodity-json";

@Component({
  selector: 'app-commodity-select',
  templateUrl: './commodity-select.component.html',
  styleUrls: ['./commodity-select.component.css']
})
export class CommoditySelectComponent implements OnInit {
  commodities: Commodity[] = [];
  commodityInfo!: CommodityJson;
  request = {page: 0, size: 5};
  pageNumber = 0;
  totalPages = 0;
  choice = -1;
  @ViewChild("name") nameInput: any;
  name = '';
  commodity: Commodity = {};
  constructor(private commodityService: CommodityService,
              private router: Router,
              private titleService: Title) {
    this.titleService.setTitle('Chọn sản phẩm có sẵn.');
  }

  ngOnInit(): void {
    this.getAll(this.request);
  }

  private getAll(request: { page?: any; size?: any; } | undefined): void {
    this.name = '';
    this.commodityService.getAllCommodity(request).subscribe(data => {
      this.commodityInfo = data;
      this.commodities = data.content;
      this.totalPages = data.totalPages;
      this.pageNumber = data.pageable.pageNumber;
    }, error => {
    }, () => {
    });
  }

  changePage(pageNumber: number) {
    this.request.page = pageNumber;
    this.ngOnInit();
  }

  search(name: string, flag: boolean) {
    if (!flag) {
      this.request.page = 0;
    }
    this.name = name;
    this.commodityService.searchCommodity(name.trim(), this.request).subscribe(data => {
      this.commodityInfo = data;
      this.commodities = data.content;
      this.totalPages = data.totalPages;
      this.pageNumber = data.pageable.pageNumber;
    }, error => {
      this.commodities = [];
    }, () => {
    });
  }

  selectCommodity(id: number, index: number) {
    this.commodity.id = id;
    this.choice = index;
  }

  select() {
    this.commodityService.findById(this.commodity.id).subscribe(data => {
      this.commodity = data;
      alert(this.commodity.name);
    }, error => {
      this.commodity = {}
    });
  }
}
