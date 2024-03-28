import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { CatererDetailsPage } from './caterer-details/caterer-details.page';
import { ProductDetailsPage } from './product-details/product-details.page';
import { RatingPage } from './rating/rating.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'caterer/:id',
    component:  CatererDetailsPage
  },
  {
    path: 'product/:id',
    component:  ProductDetailsPage
  },
  {
    path: 'rating/:id',
    component:  RatingPage
  }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
