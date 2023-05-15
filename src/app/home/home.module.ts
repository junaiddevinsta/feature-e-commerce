import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './banner/banner.component';
import { RenderHomeComponent } from './render-home.component';
import { FeaturesComponent } from './features/features.component';
import { CategoriesComponent } from './categories/categories.component';
import { TopNewArrivalsComponent } from './top-new-arrivals/top-new-arrivals.component';
import { AdSectionComponent } from './ad-section/ad-section.component';
import { RecomendedForYouComponent } from './recomended-for-you/recomended-for-you.component';


@NgModule({
  declarations: [
    BannerComponent,
    RenderHomeComponent,
    FeaturesComponent,
    CategoriesComponent,
    TopNewArrivalsComponent,
    AdSectionComponent,
    RecomendedForYouComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[
    BannerComponent,
    FeaturesComponent
  ]
})
export class HomeModule { }
