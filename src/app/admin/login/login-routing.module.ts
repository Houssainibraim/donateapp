import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { DashboardPage } from '../dashboard/dashboard.page';
const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path : 'dashboard',
    component:DashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
