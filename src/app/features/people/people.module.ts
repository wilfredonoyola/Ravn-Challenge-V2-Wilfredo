import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleItemComponent } from './people-item/people-item.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleItemComponent,
    PeopleDetailsComponent,
  ],
  imports: [SharedModule, PeopleRoutingModule, InfiniteScrollModule],
})
export class PeopleModule {}
