import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderUserAccountComponent } from '../render-user-account.component';
import { VoucherComponent } from './voucher/voucher.component';

const routes: Routes = [{
  path:'',
  component:RenderUserAccountComponent,
  children:[
    {
      path:'voucher',
      component:VoucherComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentMethodRoutingModule { }
