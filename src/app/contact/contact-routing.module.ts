import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderWebsiteComponent } from '../render-website.component';
import { RenderContactComponent } from './render-contact/render-contact.component';

const routes: Routes = [
  {
    path:'',
    component:RenderWebsiteComponent,
    children:[
      {
        path:'',
        component:RenderContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
