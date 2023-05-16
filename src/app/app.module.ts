import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderWebsiteComponent } from './render-website.component';
import { SharedWebsiteModule } from './shared-website/shared-website.module';
import { HomeModule } from './home/home.module';
import { ShopModule } from './shop/shop.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { ViewProductModule } from './view-product/view-product.module';
import { CheckoutModule } from './checkout/checkout.module';
import { PlaceOrderModule } from './place-order/place-order.module';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import { SharedUserAccountModule } from './user-account/shared-user-account/shared-user-account.module';
import { UserAccountModule } from './user-account/user-account.module';
import { ManageAccountModule } from './user-account/manage-account/manage-account.module';




@NgModule({
  declarations: [
    AppComponent,
    RenderWebsiteComponent,
    LoginComponent,
    RegisterComponent,
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedWebsiteModule,
    HomeModule,
    ShopModule,
    AboutModule,
    ContactModule,
    ViewProductModule,
    CheckoutModule,
    PlaceOrderModule,
    SharedUserAccountModule,
    UserAccountModule,
    ManageAccountModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
