import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RenderWebsiteComponent } from '../render-website.component';
import { RenderShopComponent } from './render-shop.component';

const routes: Routes = [{
  path:'',
  component:RenderWebsiteComponent,
  children:[
    {
      path:'',
      component:RenderShopComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
