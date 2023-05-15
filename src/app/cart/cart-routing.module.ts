import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderWebsiteComponent } from '../render-website.component';
import { RenderCartComponent } from './render-cart.component';


const routes: Routes = [
  {
    path:'',
    component:RenderWebsiteComponent,
    children:[{
     path:'',
     component:RenderCartComponent
    }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
