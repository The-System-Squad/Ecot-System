import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard'

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToCatererlist = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./auth/registration/registration.module').then( m => m.RegistrationPageModule)
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
    loadChildren: () => import('./auth/catererreg/catererreg.module').then( m => m.CatererregPageModule)
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
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },

  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
