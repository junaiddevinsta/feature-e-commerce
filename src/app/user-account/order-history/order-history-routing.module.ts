import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderUserAccountComponent } from '../render-user-account.component';
import { UserReturnsComponent } from './user-returns/user-returns.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';

const routes: Routes = [
  {
    path:'',
    component:RenderUserAccountComponent,
    children:[
      {
        path:'user-returns',
        component:UserReturnsComponent

      },
      {
        path:'user-cancellations',
        component:UserReturnsComponent
      },
      {
        path:'user-reviews',
        component:UserReviewsComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderHistoryRoutingModule { }
