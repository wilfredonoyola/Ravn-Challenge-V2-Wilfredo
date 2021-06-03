import { Component, Input } from '@angular/core';
import { People } from 'src/app/shared/interfaces/data.interface';

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.scss'],
})
export class PeopleItemComponent {
  @Input()
  person!: People;
  constructor() {}
}
