import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderUserAccountComponent } from '../render-user-account.component';

import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';

const routes: Routes = [
  {
    path:'',
    component:RenderUserAccountComponent,
    children:[
      {
        path:'profile-info',
        component:ProfileInfoComponent
      },
      {
        path:'manage-address',
        component:ManageAddressComponent
      }
      
    ],
   
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAccountRoutingModule { }