import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { RenderCheckoutComponent } from './render-checkout.component';
import { BreadcrumComponent } from './breadcrum/breadcrum.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';


@NgModule({
  declarations: [
    RenderCheckoutComponent,
    BreadcrumComponent,
    CheckoutFormComponent,
    OrderSummaryComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ],
  exports:[
    BreadcrumComponent,
    CheckoutFormComponent,
    OrderSummaryComponent
  ]
})
export class CheckoutModule { }
