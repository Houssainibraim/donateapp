import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginClientPage } from './login-client.page';
import { PublicationsPage } from '../publications/publications.page';
const routes: Routes = [
  {
    path: '',
    component: LoginClientPage
  },
  {
    path:'publications',
    component:PublicationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginClientPageRoutingModule {}
