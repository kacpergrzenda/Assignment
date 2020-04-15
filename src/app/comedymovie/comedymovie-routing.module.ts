import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComedymoviePage } from './comedymovie.page';

const routes: Routes = [
  {
    path: '',
    component: ComedymoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComedymoviePageRoutingModule {}
