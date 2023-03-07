
import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {TokenService} from "../../log-in/service/token.service";
import {Commodity} from "../../entity/commodity";
import {ActivatedRoute, Router} from "@angular/router";
import {CommodityService} from "../../service/commodity.service";
import {Cart} from "../../entity/cart";
// @ts-ignore
import Swal from 'sweetalert2';
import {ShareService} from "../../log-in/service/share.service";
import {Title} from "@angular/platform-browser";



// @ts-ignore
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
   cart: Cart ={
     id : 0,
     name: '',
     image: '',
     price: 0
   };
   carts: Cart[] = [];
  isLogged = false;
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

  constructor(private title:Title,private token:TokenService,private commodityService: CommodityService, private activatedRoute: ActivatedRoute, private shareService: ShareService,private route: Router) {

    this.activatedRoute.paramMap.subscribe(
      next => {
        this.searchCommodity(next.get('name'), 0);
      }
    );
    this.getCommodityByQuantitySold(0);
  }


  ngOnInit(): void {
    this.title.setTitle('Trang chủ')
    this.isLogged = this.token.isLogger();
    this.loader();
    this.shareService.getClickEvent().subscribe(next => {
      this.loader()
    })
  }

  loader() {
    this.isLogged = this.token.isLogger();
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

  addToCart(ids: number, images: string, names: string, prices: number) {





    if (this.isLogged) {
      if (this.token.getCart() != undefined) {
        this.carts = this.token.getCart();
        this.cart.id = ids;
        this.cart.name = names;
        this.cart.image = images;
        this.cart.price = prices;
        if (this.token.checkExist(names)) {
          this.token.upQuantity(ids, this.carts)
        } else {
          this.cart.quantity = 1;
          this.carts.push(this.cart);
        }
        this.token.setCart(this.carts);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Đã thêm sản phẩm ' + this.cart.name + ' vào giỏ hàng',
          showConfirmButton: false,
          timer: 2500
        })

      } else {
        this.cart.id = ids;
        this.cart.name = names;
        this.cart.image = images;
        this.cart.price = prices;
        this.cart.quantity = 1;
        this.carts.push(this.cart);
        this.token.setCart(this.carts);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Đã thêm sản phẩm ' + this.cart.name + ' vào giỏ hàng',
          showConfirmButton: false,
          timer: 2500
        })
      }
    } else {
      document.getElementById("dissmis").click()
      this.route.navigateByUrl('/login')
    }
  }
}
