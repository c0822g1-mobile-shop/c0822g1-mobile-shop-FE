import { Component, OnInit } from '@angular/core';
import {Cart} from "../../../entity/cart";
import {TokenService} from "../../../log-in/service/token.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: Cart[];
  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
    this.carts = this.tokenService.getCart();
  }

}
