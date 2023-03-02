import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateCommodityComponent} from './create-commodity/create-commodity.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../environments/environment";
import { EditCommodityComponent } from './edit-commodity/edit-commodity.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";


@NgModule({
  declarations: [CreateCommodityComponent, EditCommodityComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ]
})
export class CommodityModule {
}
