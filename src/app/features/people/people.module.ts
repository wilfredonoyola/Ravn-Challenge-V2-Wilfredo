  
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';

@NgModule({
  declarations: [PeopleComponent],
  imports: [SharedModule, PeopleRoutingModule]
})
export class PeopleModule {}