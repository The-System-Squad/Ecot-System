import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./pages/forget/forget.module').then( m => m.ForgetPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'catererreg',
    loadChildren: () => import('./pages/catererreg/catererreg.module').then( m => m.CatererregPageModule)
  },
  {
    path: 'orderlhistory',
    loadChildren: () => import('./pages/orderlhistory/orderlhistory.module').then( m => m.OrderlhistoryPageModule)
  },
  {
    path: 'ordermenu',
    loadChildren: () => import('./pages/popup/ordermenu/ordermenu.module').then( m => m.OrdermenuPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },

  {
    path: 'person',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'catererlist',
    loadChildren: () => import('./caterer/catererlist/catererlist.module').then( m => m.CatererlistPageModule)
  },
  {
    path: 'caterer-details',
    loadChildren: () => import('./caterer/caterer-details/caterer-details.module').then( m => m.CatererDetailsPageModule)
  },
  {
    path: 'catererdetails',
    loadChildren: () => import('./caterer/catererdetails/catererdetails.module').then( m => m.CatererdetailsPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
