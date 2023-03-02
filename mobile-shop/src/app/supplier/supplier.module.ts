
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SupplierCreateComponent} from './component/supplier-create/supplier-create.component';
import {SupplierUpdateComponent} from './component/supplier-update/supplier-update.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {RouterModule} from "@angular/router";
import {SupplierRoutingModule} from "./supplier-routing.module";
import {SupplierListComponent} from "./component/supplier-list/supplier-list.component";


@NgModule({
  declarations: [SupplierCreateComponent, SupplierUpdateComponent, SupplierListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,
    SupplierRoutingModule
    ],

})

export class SupplierModule {
}
