import { Component, Input, OnInit } from '@angular/core';
import { People } from 'src/app/shared/interfaces/data.interface';

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.scss']
})
export class PeopleItemComponent implements OnInit {
  @Input()
  person!: People;
  constructor() { }

  ngOnInit(): void {
  }

}
