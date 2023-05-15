import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderWebsiteComponent } from '../render-website.component';
import { RenderPlaceOrderComponent } from './render-place-order.component';


const routes: Routes = [{
  path:'',
  component:RenderWebsiteComponent,
  children:[
    {
      path:'',
      component:RenderPlaceOrderComponent
   
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceOrderRoutingModule { }
