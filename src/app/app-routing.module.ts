import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'apps',
    loadChildren: () => import('./apps/apps.module').then( m => m.AppsPageModule)
  },
  {
    path: 'jogos',
    loadChildren: () => import('./jogos/jogos.module').then( m => m.JogosPageModule)
  },
  {
    path: 'livros',
    loadChildren: () => import('./livros/livros.module').then( m => m.LivrosPageModule)
  },
  {
    path: 'detalhes',
    loadChildren: () => import('./detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
