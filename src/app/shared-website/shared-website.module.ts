import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedWebsiteRoutingModule } from './shared-website-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedWebsiteRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedWebsiteModule { }
