import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'association',
    loadChildren: () => import('./association/association/association.module').then( m => m.AssociationPageModule)
  },
  {
    path: 'annonce',
    loadChildren: () => import('./association/annonce/annonce.module').then( m => m.AnnoncePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./admin/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'editing',
    loadChildren: () => import('./admin/editing/editing.module').then( m => m.EditingPageModule)
  },
  {
    path: 'publications',
    loadChildren: () => import('./client/publications/publications.module').then( m => m.PublicationsPageModule)
  },
  {
    path: 'login-client',
    loadChildren: () => import('./client/login-client/login-client.module').then( m => m.LoginClientPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
