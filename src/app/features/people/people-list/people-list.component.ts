import { Component, OnInit } from '@angular/core'
import {
  ListPeople,
  Pagination,
  People,
} from 'src/app/shared/interfaces/data.interface'

import { DataService } from 'src/app/shared/services/data.service'

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
})
export class PeopleListComponent implements OnInit {
  pagination: Pagination | undefined
  resultsPerPage: number = 5
  isLoading: boolean = true
  people: People[] = []
  personDetail: People | undefined

  constructor(private dataSvc: DataService) {}

  ngOnInit(): void {
    this.getData()
  }
  /** 
   Get the person list from the shared service.
   It handles the logic when it is the first face and also when there are more pages with data.
  **/
  getData(): void {
    this.isLoading = true
    this.dataSvc
      .getPeopleByPage(this.resultsPerPage, this.pagination?.endCursor)
      .subscribe(
        (ApiResponse: ListPeople) => {
          this.pagination = ApiResponse.pageInfo

          // Added the new people to list
          if (this.people && ApiResponse.people) {
            ApiResponse.people.map((person: People) => {
              this.people.push(person)
            })
          } else {
            // Firts people to display
            this.people = ApiResponse.people
            this.pagination = ApiResponse.pageInfo
          }
        },
        (err) => console.log('Observer got an error: ' + err),
        () => {
          this.isLoading = false
        }
      )
  }

  /**
   * Event handling for infinite scroll
   */
  onScrollDown(): void {
    if (this.pagination?.hasNextPage) {
      this.getData()
    } else {
      console.log('No more results to display')
    }
  }

  /**
   * Gets the detail information for a person.
   * @param person
   */
  getDetailPerson(person: People) {
    this.personDetail = person
  }
}
