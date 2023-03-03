import { Component, OnInit } from '@angular/core';
import {CommodityService} from "../../service/commodity.service";
import {Commodity} from "../../entity/commodity";

@Component({
  selector: 'app-list-commodity',
  templateUrl: './list-commodity.component.html',
  styleUrls: ['./list-commodity.component.css']
})
export class ListCommodityComponent implements OnInit {

  commodity = []
  item: string;
  index = -1;
  constructor(private commodityService: CommodityService) {
    this.getAll();
  }

  ngOnInit(): void {
  }
  private getAll() {
    this.commodityService.getAll().subscribe(data => {
      console.log(data)
      this.commodity = data;

    })
  }

  choice(id: number,name:string) {
    this.index = id;
    this.item = name;
  }

  delete(id: number) {
    if (id != null) {
      this.commodityService.delete(this.index).subscribe(next => {
        alert("xóa thành công")
        this.getAll()
      }, error => {
      }, () => {
      });
    }
  }

  nextPage() {
    this.commodityService.changePage(this.commodity['number']+1).subscribe(next => {
      this.commodity = next;
    })
  }

  previousPage() {
    this.commodityService.changePage(this.commodity['number']-1).subscribe(next => {
      this.commodity = next;
    })
  }

  search(value: number, value2: string) {
    if (value2==""){
      this.getAll()
    }
    this.commodityService.search(value,value2).subscribe(next => {
      this.commodity = next;
    })
  }
}
