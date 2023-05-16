import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountRoutingModule } from './user-account-routing.module';
import { RenderUserAccountComponent } from './render-user-account.component';
import { ManageAccountModule } from './manage-account/manage-account.module';
import { SharedUserAccountModule } from './shared-user-account/shared-user-account.module';



@NgModule({
  declarations: [
    
  
    RenderUserAccountComponent
  ],
  imports: [
    CommonModule,
    UserAccountRoutingModule,
    ManageAccountModule,
    SharedUserAccountModule
  ]
})
export class UserAccountModule { }