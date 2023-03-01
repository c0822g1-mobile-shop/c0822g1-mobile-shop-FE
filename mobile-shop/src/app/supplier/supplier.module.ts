import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SupplierCreateComponent} from './component/supplier-create/supplier-create.component';
import {SupplierUpdateComponent} from './component/supplier-update/supplier-update.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [SupplierCreateComponent, SupplierUpdateComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule
  ]
})
export class SupplierModule {
}
