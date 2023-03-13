import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BodyComponent} from "./body/body.component";
import { CartComponent } from './cart/cart/cart.component';
import { ProfileComponent } from './profile/profile/profile.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ErrorComponent } from './error/error.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    CartComponent, ProfileComponent,BodyComponent, ErrorComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})

export class HomeModule {
}
