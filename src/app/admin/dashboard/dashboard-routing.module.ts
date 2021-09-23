import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { EditingPage } from '../editing/editing.page';
const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path:'editing',
    component: EditingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
