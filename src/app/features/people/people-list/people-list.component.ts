import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

   people$ = this.dataSvc.people$;

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
  }


}
