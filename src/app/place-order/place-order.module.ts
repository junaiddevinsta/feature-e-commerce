import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceOrderRoutingModule } from './place-order-routing.module';
import { CompleteOrderComponent } from './complete-order/complete-order.component';
import { RenderPlaceOrderComponent } from './render-place-order.component';
import { BreadcrumComponent } from './breadcrum/breadcrum.component';


@NgModule({
  declarations: [
    CompleteOrderComponent,
    RenderPlaceOrderComponent,
    BreadcrumComponent
  ],
  imports: [
    CommonModule,
    PlaceOrderRoutingModule
  ],
  exports:[
    CompleteOrderComponent
  ]
})
export class PlaceOrderModule { }
