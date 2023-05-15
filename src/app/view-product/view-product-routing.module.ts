import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderWebsiteComponent } from '../render-website.component';
import { RenderViewComponent } from './render-view.component';


const routes: Routes = [{
  path:'',
  component:RenderWebsiteComponent,
  children:[
    {
      path:'',
      component:RenderViewComponent
    }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewProductRoutingModule { }
