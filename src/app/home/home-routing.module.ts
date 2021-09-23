import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AssociationPage } from '../association/association/association.page';
import { LoginPage } from '../admin/login/login.page';
import { LoginClientPage } from '../client/login-client/login-client.page';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'association',
    component: AssociationPage
  },
  {
    path:'login',
    component: LoginPage
  },
  {
    path:'login-client',
    component: LoginClientPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
