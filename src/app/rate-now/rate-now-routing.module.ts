import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RateNowPage } from './rate-now.page';

const routes: Routes = [
  {
    path: '',
    component: RateNowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateNowPageRoutingModule {}
