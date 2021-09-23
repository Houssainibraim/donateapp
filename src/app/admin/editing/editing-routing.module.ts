import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditingPage } from './editing.page';

const routes: Routes = [
  {
    path: '',
    component: EditingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditingPageRoutingModule {}
