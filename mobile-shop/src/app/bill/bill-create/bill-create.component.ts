import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Bill} from "../../entity/bill";
import {Observable} from "rxjs";
import {User} from "../../entity/user";
import {FormGroup} from "@angular/forms";
import {Commodity} from "../../entity/commodity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bill-create',
  templateUrl: './bill-create.component.html',
  styleUrls: ['./bill-create.component.css']
})
export class BillCreateComponent implements OnInit {
  user: User[] = [];
  commoditi: Commodity[] = [];
  // formCreateBill: FormGroup = new FormGroup({});
  constructor(private router: Router ) {
  }

  ngOnInit(): void {
  }

}
