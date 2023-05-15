import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { BreadcrumComponent } from './breadcrum/breadcrum.component';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RenderCartComponent } from './render-cart.component';


@NgModule({
  declarations: [
    BreadcrumComponent,
    RenderCartComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports:[
    BreadcrumComponent,
ShoppingCartComponent
  ]
})
export class CartModule { }
