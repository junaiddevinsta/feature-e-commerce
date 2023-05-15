import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderWebsiteComponent } from '../render-website.component';
import { RenderAboutComponent } from './render-about/render-about.component';

const routes: Routes = [{
  path:'',
  component:RenderWebsiteComponent,
  children:[
    {
      path:'',
      component:RenderAboutComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
