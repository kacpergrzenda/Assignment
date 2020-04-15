import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'comedymovie',
    loadChildren: () => import('./comedymovie/comedymovie.module').then( m => m.ComedymoviePageModule)
  },
  {
    path: 'horrormovie',
    loadChildren: () => import('./horrormovie/horrormovie.module').then( m => m.HorrormoviePageModule)
  },
  {
    path: 'crimemovie',
    loadChildren: () => import('./crimemovie/crimemovie.module').then( m => m.CrimemoviePageModule)
  },
  {
    path: 'yearmovie',
    loadChildren: () => import('./yearmovie/yearmovie.module').then( m => m.YearmoviePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
