import { Component, OnInit } from '@angular/core';
import {CommodityService} from "../../service/commodity.service";


@Component({
  selector: 'app-list-commodity',
  templateUrl: './list-commodity.component.html',
  styleUrls: ['./list-commodity.component.css']
})
export class ListCommodityComponent implements OnInit {
  selects = 0;
  commodity = []
  item: string;
  index = -1;
  search2 = false;
  value1 = -1;
  value2 = "";
  constructor(private commodityService: CommodityService) {
    this.getAll();
  }

  ngOnInit(): void {
  }
   getAll() {
    this.search2 = false;
    this.commodityService.getAll().subscribe(data => {
      console.log(data)
      this.commodity = data;

    })
  }

  choose(value: number){
   this.selects = value;
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
    if (this.search2) {
      this.commodityService.search2(this.value1,this.value2,this.commodity['number']+1).subscribe(next => {
        this.commodity = next;
      })
    } else {
      this.commodityService.changePage(this.commodity['number']+1).subscribe(next => {
        this.commodity = next;
      })
    }

  }

  previousPage() {
    if (this.search2) {
      this.commodityService.search2(this.value1,this.value2,this.commodity['number']-1).subscribe(next => {
        this.commodity = next;
      })
    } else {
      this.commodityService.changePage(this.commodity['number']-1).subscribe(next => {
        this.commodity = next;
      })
    }

  }

  search(value: number, value2: string) {
    this.value1 = value;
    this.value2 = value2;
    this.search2 = true;
    // if (value2==""){
    //   this.getAll()
    // }
    this.commodityService.search(value,value2).subscribe(next => {
      this.commodity = next;
      console.log(next)
    },error => {
      console.log(error)
    })
  }
}
