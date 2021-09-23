import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnoncePage } from '../annonce/annonce.page';
import { AssociationPage } from './association.page';

const routes: Routes = [
  {
    path: '',
    component: AssociationPage
  },
  {
    path:'annonce',
    component: AnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssociationPageRoutingModule {}
