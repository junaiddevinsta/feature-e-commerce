import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderWebsiteComponent } from '../render-website.component';
import { RenderCheckoutComponent } from './render-checkout.component';

const routes: Routes = [
  {
    path:'',
    component:RenderWebsiteComponent,
    children:[
      {
        path:'',
        component:RenderCheckoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
