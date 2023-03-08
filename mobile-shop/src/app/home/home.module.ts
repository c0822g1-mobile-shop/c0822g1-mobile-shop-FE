import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BodyComponent} from "./body/body.component";
import { CartComponent } from './cart/cart/cart.component';
import { ProfileComponent } from './profile/profile/profile.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CartComponent, ProfileComponent,BodyComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})

export class HomeModule {
}
