import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import {PageAComponent} from './page-a/page-a.component';
import {PageBComponent} from './page-b/page-b.component';
import {LoginPage} from './login/login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
  {
    path: 'a',
    component: PageAComponent,
  },
  {
    path: 'b',
    component: PageBComponent,
  },
  {
    path: 'home',
    component: HomePage,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
