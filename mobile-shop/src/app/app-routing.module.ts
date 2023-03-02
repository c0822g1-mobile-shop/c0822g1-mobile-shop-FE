import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateCommodityComponent} from "./commodity/create-commodity/create-commodity.component";
import {EditCommodityComponent} from "./commodity/edit-commodity/edit-commodity.component";


const routes: Routes = [{
  path: "commodity/create", component: CreateCommodityComponent
}, {
  path: "commodity/edit/:id", component: EditCommodityComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
