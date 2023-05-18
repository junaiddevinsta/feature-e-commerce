import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentMethodRoutingModule } from './payment-method-routing.module';
import { VoucherComponent } from './voucher/voucher.component';


@NgModule({
  declarations: [
    VoucherComponent
  ],
  imports: [
    CommonModule,
    PaymentMethodRoutingModule
  ],
  exports:[
    VoucherComponent
  ]
})
export class PaymentMethodModule { }
