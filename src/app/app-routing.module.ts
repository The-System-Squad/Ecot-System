import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule), canActivate: [AuthGuard]
  },
  { path: 'auth', loadChildren: () => import('./auth-screen/authentication.module').then(m => m.AuthenticationModule) },
  {
    path: 'cat-tabs',
    loadChildren: () => import('./cat-tabs/cat-tabs.module').then( m => m.CatTabsPageModule),canActivate: [AuthGuard]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
