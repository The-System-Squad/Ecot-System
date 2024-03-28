import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatTab1Page } from './cat-tab1.page';
import { OrderDetailsPage } from './order-details/order-details.page';

const routes: Routes = [
  {
    path: '',
    component: CatTab1Page
  },
  {
    path: 'order-details/:id',
    component: OrderDetailsPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatTab1PageRoutingModule {}
