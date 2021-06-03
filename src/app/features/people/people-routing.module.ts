import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';

const routes: Routes = [
  // { path: '', redirectTo: 'people', pathMatch: 'full' },
  {
    path: '',
    component: PeopleListComponent,
    children: [
      {
        path: 'details/:personId',
        component: PeopleDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}
