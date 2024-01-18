import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatererdetailsPage } from './catererdetails.page';

const routes: Routes = [
  {
    path: '',
    component: CatererdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatererdetailsPageRoutingModule {}
