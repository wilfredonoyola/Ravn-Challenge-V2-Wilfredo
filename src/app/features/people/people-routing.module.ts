import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleListComponent } from './people-list/people-list.component';

import { PeopleDetailsComponent } from './people-details/people-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: '',
        component: PeopleListComponent
      },
       {
        path: 'details',
        component: PeopleDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}