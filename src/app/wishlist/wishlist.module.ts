import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { RenderWishlistComponent } from './render-wishlist.component';
import { BreadcrumComponent } from './breadcrum/breadcrum.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountContentComponent } from './account-content/account-content.component';



@NgModule({
  declarations: [
    RenderWishlistComponent,
    BreadcrumComponent,
    SidebarComponent,
    AccountContentComponent
    
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    
  ],
  exports:[
    BreadcrumComponent,
    SidebarComponent,
    AccountContentComponent
  ]
})
export class WishlistModule { }
