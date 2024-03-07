import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatererregPage } from './catererreg.page';

const routes: Routes = [
  {
    path: '',
    component: CatererregPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatererregPageRoutingModule {}
