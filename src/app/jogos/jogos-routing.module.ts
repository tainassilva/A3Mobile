import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogosPage } from './jogos.page';

const routes: Routes = [
  {
    path: '',
    component: JogosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogosPageRoutingModule {}
