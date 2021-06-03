import { Component, Input, OnInit } from '@angular/core';
import { People } from 'src/app/shared/interfaces/data.interface';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  @Input()
  person!: People;
  constructor() { }

  ngOnInit(): void {
  }

}
