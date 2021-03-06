import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {ProductListComponent} from "./product-list/product-list.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:productId', component: ProductComponent},
  {path: '**', component: HomeComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
