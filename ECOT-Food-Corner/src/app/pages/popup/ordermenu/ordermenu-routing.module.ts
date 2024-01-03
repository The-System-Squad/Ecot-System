import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdermenuPage } from './ordermenu.page';

const routes: Routes = [
  {
    path: '',
    component: OrdermenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdermenuPageRoutingModule {}
