// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {CommodityService} from "../../service/commodity.service";
import Swal from 'sweetalert2';
// @ts-ignore
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";

// @ts-ignore
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
  commodityList;

  search2 = false;
  value1 = -1;
  value2 = "";

  constructor(private router: Router,private commodityService: CommodityService,private title:Title) {
    this.getAll();
  }

  ngOnInit(): void {
    this.title.setTitle('Danh Sách Hàng Hóa')
    this.getAll();
  }

  getAll() {
    this.search2 = false;
    this.commodityService.getAll().subscribe(data => {
      console.log(data)
      this.commodity = data;
      this.commodityList = data
    })
  }


  choose(value: number) {
    this.selects = value;
  }

  choice(id: number, name: string) {
    this.index = id;
    this.item = name;
  }


  delete(id: number): void {
    Swal.fire({
      title: 'Bạn có muốn xóa?',
      text: 'Hàng hóa: ' + this.item,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có',
      cancelButtonText: 'Không'
    }).then((result) => {
      if (result.isConfirmed) {
        this.commodityService.delete(id).subscribe(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Xóa thành công ',
            showConfirmButton: false,
            timer: 2000
          });
          this.index = -1;
          this.getAll();
        }, error => {
          console.log(error);
        });
      }
    });
  }

  nextPage() {
    if (this.search2) {
      this.commodityService.search2(this.value1, this.value2, this.commodityList['number'] + 1).subscribe(next => {
        this.commodityList = next;
      })
    } else {
      this.commodityService.changePage(this.commodityList['number'] + 1).subscribe(next => {
        this.commodityList = next;
      })
    }

  }

  previousPage() {
    if (this.search2) {
      this.commodityService.search2(this.value1, this.value2, this.commodityList['number'] - 1).subscribe(next => {
        this.commodityList = next;
      })
    } else {
      this.commodityService.changePage(this.commodityList['number'] - 1).subscribe(next => {
        this.commodityList = next;
      })
    }
  }

  page1(num:number){
    if (this.search2) {
      this.commodityService.search2(this.value1, this.value2, num).subscribe(next => {
        this.commodityList = next;
      })
    } else {
      this.commodityService.changePage(num).subscribe(next => {
        this.commodityList = next;
      })
    }
  }

  search(value: number, value2: string) {
    if (value2==""){
      this.getAll()
    }
    this.value1 = value;
    this.value2 = value2;
    this.search2 = true;
    this.commodityService.search(value, value2).subscribe(next => {
      console.log(next);
      if (next['content'].length == 0) {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Không tìm thấy',
          text: 'Kết quả bạn cần tìm là: ' +'" '+ value2 +' " '+ ' không có',
          showConfirmButton: false,
          timer: 2000
        });
      } else {
        this.commodityList = next;
      }
    })

  }
}
