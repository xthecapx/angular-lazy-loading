import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'lazy-one',
    loadChildren: './lazy-one/lazy-one.module#LazyOneModule'
  },
  {
    path: 'lazy-two',
    loadChildren: './lazy-two/lazy-two.module#LazyTwoModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
