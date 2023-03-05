import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {BodyComponent} from "./body/body.component";
import {NoticeComponent} from "./notice/notice.component";



@NgModule({
  declarations: [
    BodyComponent,
    NoticeComponent
  ],
  exports: [
    NoticeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})

export class HomeModule {
}
