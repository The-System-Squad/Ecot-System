import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatTab2Page } from './cat-tab2.page';

const routes: Routes = [
  {
    path: '',
    component: CatTab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatTab2PageRoutingModule {}
