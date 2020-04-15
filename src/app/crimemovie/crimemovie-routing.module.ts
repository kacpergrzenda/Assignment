import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrimemoviePage } from './crimemovie.page';

const routes: Routes = [
  {
    path: '',
    component: CrimemoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrimemoviePageRoutingModule {}
