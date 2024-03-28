import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatTabsPage } from './cat-tabs.page';

const routes: Routes = [

  {
    path: '',
    component: CatTabsPage,
    children: [
      {
        path: 'cat-tab1',
        loadChildren: () => import('../cat-tab1/cat-tab1.module').then(m => m.CatTab1PageModule)
      },
      {
        path: 'cat-tab2',
        loadChildren: () => import('../cat-tab2/cat-tab2.module').then(m => m.CatTab2PageModule)
      },
      {
        path: 'cat-tab3',
        loadChildren: () => import('../cat-tab3/cat-tab3.module').then(m => m.CatTab3PageModule)
      },
      {
        path: '',
        redirectTo: 'cat-tabs/cat-tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'cat-tabs/cat-tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatTabsPageRoutingModule {}
