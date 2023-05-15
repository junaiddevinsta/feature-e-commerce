import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RenderContactComponent } from './render-contact/render-contact.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    RenderContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  exports:[
    ContactUsComponent
  ]
})
export class ContactModule { }
