import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'squirtle-paper',
    loadChildren: () =>
      import('./features/squirtle-paper/squirtle-paper.module').then((m) => m.SquirtlePaperModule),
  },
  {
    path: '**',
    loadChildren: () => import('./features/not-found/not-found.module').then((m) => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
