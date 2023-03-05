import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from "./body/body.component";
import {NoticeComponent} from "./notice/notice.component";


const routes: Routes = [
  {path: '' , component: BodyComponent},
  {path: 'home/:name', component: BodyComponent},
  {path: 'error/:name',component: NoticeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
