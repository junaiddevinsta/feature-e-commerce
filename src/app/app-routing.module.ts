import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { RenderWebsiteComponent } from './render-website.component';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path:'',
   loadChildren:()=> import('./home/home.module').then((m)=>m.HomeModule)
  },
  {
    path:'shop',
    loadChildren:()=>import('./shop/shop.module').then((m)=>m.ShopModule)
  },
  {
    path:'about-us',
    loadChildren:()=>import('./about/about.module').then((m)=>m.AboutModule)
  },
  {
    path:'contact-us',
    loadChildren:()=>import('./contact/contact.module').then((m)=>m.ContactModule)
  },
  {
    path:'view',
    loadChildren:()=>import('./view-product/view-product.module').then((m)=>m.ViewProductModule)
  },
{
  path:'wishlist',
  loadChildren:()=>import('./wishlist/wishlist.module').then((m)=>m.WishlistModule)
},
{
  path:'cart',
  loadChildren:()=>import('./cart/cart.module').then((m)=>m.CartModule)
},
{
  path:'checkout',
  loadChildren:()=>import('./checkout/checkout.module').then((m)=>m.CheckoutModule)
},
{
  path:'place-order',
  loadChildren:()=>import('./place-order/place-order.module').then((m)=>m.PlaceOrderModule)
},
{
  path:'login',
  component:RenderWebsiteComponent,
  children:[
    {
      path:'',
      component:LoginComponent
    },
   
  ]
  
},
{
  path:'register',
  component:RenderWebsiteComponent,
  children:[
    {
      path:'',
      component:RegisterComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
