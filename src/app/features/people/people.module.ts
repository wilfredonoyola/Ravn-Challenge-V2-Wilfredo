  
import { NgModule } from '@angular/core';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleItemComponent } from './people-item/people-item.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PeopleListComponent, 
    PeopleItemComponent
  ],
  imports: [
    SharedModule, 
    PeopleRoutingModule
  ]
})
export class PeopleModule {}