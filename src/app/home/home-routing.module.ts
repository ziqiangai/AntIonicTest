import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {PageAComponent} from './page-a/page-a.component';
import {PageBComponent} from './page-b/page-b.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'a',
    component: PageAComponent,
  },
  {
    path: 'b',
    component: PageBComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
