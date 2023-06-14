import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'apps',
        loadChildren: () => import('../apps/apps.module').then( m => m.AppsPageModule)
      },
      {
        path: 'jogos',
        loadChildren: () => import('../jogos/jogos.module').then( m => m.JogosPageModule)
      },
      {
        path: 'livros',
        loadChildren: () => import('../livros/livros.module').then( m => m.LivrosPageModule)
      },
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
