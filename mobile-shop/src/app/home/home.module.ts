import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {BodyComponent} from "./body/body.component";
import {NoticeComponent} from "./notice/notice.component";
import { CartComponent } from './cart/cart/cart.component';
import { ProfileComponent } from './profile/profile/profile.component';
import {ReactiveFormsModule} from "@angular/forms";






@NgModule({
  declarations: [
    CartComponent, ProfileComponent,
    NoticeComponent
  ],
  exports: [
    NoticeComponent
  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})

export class HomeModule {
}
