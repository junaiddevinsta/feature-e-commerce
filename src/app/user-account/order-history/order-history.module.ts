import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderHistoryRoutingModule } from './order-history-routing.module';
import { UserReturnsComponent } from './user-returns/user-returns.component';
import { UserCancellationsComponent } from './user-cancellations/user-cancellations.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';


@NgModule({
  declarations: [
    UserReturnsComponent,
    UserCancellationsComponent,
    UserReviewsComponent
  ],
  imports: [
    CommonModule,
    OrderHistoryRoutingModule
  ]
})
export class OrderHistoryModule { }
