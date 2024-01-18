import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatererDetailsPage } from './caterer-details.page';

const routes: Routes = [
  {
    path: '',
    component: CatererDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatererDetailsPageRoutingModule {}
