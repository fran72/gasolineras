import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CcaaPage } from './ccaa.page';

const routes: Routes = [
  {
    path: '',
    component: CcaaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CcaaPageRoutingModule {}
