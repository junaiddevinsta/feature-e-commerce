import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderWebsiteComponent } from '../render-website.component';
import { RenderWishlistComponent } from './render-wishlist.component';

const routes: Routes = [
  {
    path:'',
    component:RenderWebsiteComponent,
    children:[
      {
        path:'',
        component:RenderWishlistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule { }
