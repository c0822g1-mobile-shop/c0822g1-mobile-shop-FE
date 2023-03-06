// @ts-ignore
import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CommodityService} from "../../service/commodity.service";
// @ts-ignore
import {Router} from "@angular/router";
// @ts-ignore
import {Title} from "@angular/platform-browser";
import {Commodity} from "../../entity/commodity";
import {CommodityJson} from "../../entity/commodity-json";

// @ts-ignore
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

  @Output() commodities1 = new EventEmitter<Commodity>();

  ngOnInit(): void {
    this.getAll(this.request);
  }

  /**
   * Created by: LongPT
   * Date create: 01/03/2023
   * Function: get all commodity
   * @param request
   */
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
  /**
   * Created by: LongPT
   * Date create: 01/03/2023
   * Function: pagination
   * @param pageNumber
   */
  changePage(pageNumber: number) {
    this.request.page = pageNumber;
    this.ngOnInit();
  }
  /**
   * Created by: LongPT
   * Date create: 01/03/2023
   * Function: search commodity by name
   * @param name
   * @param flag
   */
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

  /**
   * Created by: LongPT
   * Date create: 01/03/2023
   * Function: select id commodity
   * @param index
   * @param id
   */
  selectCommodity(id: number, index: number) {
    this.commodity.id = id;
    this.choice = index;
  }

  /**
   * Created by: LongPT
   * Date create: 01/03/2023
   * Function: get by id commodity
   */
  select() {
    this.commodityService.findById(this.commodity.id).subscribe(data => {
      this.commodity = data;
      this.commodities1.emit(data)
    }, error => {
      this.commodity = {}
    });
  }
}
