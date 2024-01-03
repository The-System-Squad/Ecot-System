import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderlhistoryPage } from './orderlhistory.page';

const routes: Routes = [
  {
    path: '',
    component: OrderlhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderlhistoryPageRoutingModule {}
