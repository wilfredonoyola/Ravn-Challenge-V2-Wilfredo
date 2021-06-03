import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  {
    path: 'people',
    loadChildren: () =>
      import('./features/people/people.module').then((m) => m.PeopleModule),
  },
  {
    path: '**',
    redirectTo: 'people',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
