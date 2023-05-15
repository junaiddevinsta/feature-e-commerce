import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { BreadcrumComponent } from './breadcrum/breadcrum.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsComponent } from './products/products.component';
import { RenderShopComponent } from './render-shop.component';


@NgModule({
  declarations: [
    BreadcrumComponent,
    SidebarComponent,
    ProductsComponent,
    RenderShopComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  exports:[
    BreadcrumComponent,
    SidebarComponent,
    ProductsComponent
  ]
})
export class ShopModule { }
