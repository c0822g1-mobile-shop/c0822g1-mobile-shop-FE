import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {BodyComponent} from "./body/body.component";


@NgModule({
  declarations: [
    BodyComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})

export class HomeModule {
}
