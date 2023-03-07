import { Component, OnInit } from '@angular/core';
import {Cart} from "../../../entity/cart";
import {TokenService} from "../../../log-in/service/token.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: Cart[];
  total = 0;
  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
    this.carts = this.tokenService.getCart();
    this.loading();
  }
  loading() {
    for (let i = 0; i < this.carts.length; i++) {
      this.total += (this.carts[i].quantity * this.carts[i].price)
    }
  }
  buy() {
    this.total = 0;
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thanh toán thành công ',
      showConfirmButton: false,
      timer: 2000
    });
    this.carts = []
  }
}
