import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAccountRoutingModule } from './manage-account-routing.module';

import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    
    ProfileInfoComponent,
    ManageAddressComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ManageAccountRoutingModule
  ],
  exports:[
    ProfileInfoComponent,
    ManageAddressComponent,
    ChangePasswordComponent
  ]
})
export class ManageAccountModule { }
