import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { People } from 'src/app/shared/interfaces/data.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss'],
})
export class PeopleDetailsComponent implements OnInit {
  person: People | undefined;
  private personId: any;
  paramsSubscription: Subscription | undefined;

  constructor(private dataSvc: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.personId = params['personId'];
      this.getPerson();
    });
  }

  /**
   * Get the detail of a person from a service through a call to GrahpQL
   */
  getPerson(): void {
    const id = Number(this.route.snapshot.paramMap.get('personId'));
    this.dataSvc.getPersonDetail(this.personId).subscribe(
      (person: People) => {
        this.person = person;
      },
      (err) => console.log('Observer got an error: ' + err),
      () => {}
    );
  }
}
