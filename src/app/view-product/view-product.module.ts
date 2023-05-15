import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProductRoutingModule } from './view-product-routing.module';


import { BreadcrumComponent } from './breadcrum/breadcrum.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { RenderViewComponent } from './render-view.component';



@NgModule({
  declarations: [
   
    RelatedProductsComponent,
    BreadcrumComponent,
    ProductViewComponent,
    ProductDetailsComponent,
    RenderViewComponent
  ],
  imports: [
    CommonModule,
    ViewProductRoutingModule
  ],
  exports:[
    BreadcrumComponent,
    ProductDetailsComponent,
    ProductViewComponent,
    RelatedProductsComponent

  ]

})
export class ViewProductModule { }
