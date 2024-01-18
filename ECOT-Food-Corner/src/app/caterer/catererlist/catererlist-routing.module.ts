import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatererlistPage } from './catererlist.page';

const routes: Routes = [
  {
    path: '',
    component: CatererlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatererlistPageRoutingModule {}
