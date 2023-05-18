import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountRoutingModule } from './user-account-routing.module';
import { RenderUserAccountComponent } from './render-user-account.component';
import { ManageAccountModule } from './manage-account/manage-account.module';
import { SharedUserAccountModule } from './shared-user-account/shared-user-account.module';
import { OrderHistoryModule } from './order-history/order-history.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { WishlistComponent } from './wishlist/wishlist.component';



@NgModule({
  declarations: [


    RenderUserAccountComponent,
        WishlistComponent
  ],
  imports: [
    CommonModule,
    UserAccountRoutingModule,
    ManageAccountModule,
    SharedUserAccountModule,
    OrderHistoryModule,
    PaymentMethodModule
  ]
})
export class UserAccountModule { }
