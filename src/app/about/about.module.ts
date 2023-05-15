import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { RenderAboutComponent } from './render-about/render-about.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    RenderAboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports:[
    AboutUsComponent
  ]
})
export class AboutModule { }
