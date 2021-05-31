import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { DataResponse, People } from '../interfaces/data.interface';

const QUERY = gql`
{
  allPeople {
    people {
      id
      name      
      homeworld{
        name
      }
      species{
        name
      }
    }
  }
}
 `;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private peopleSubject = new BehaviorSubject<People[]>([]);
  people$ = this.peopleSubject.asObservable();

  constructor(private apollo: Apollo) { 
    this.getDataAPI();
  }
  
  private getDataAPI(): void{
    this.apollo.watchQuery<DataResponse>({
      query: QUERY
    }).valueChanges.pipe(
      take(1),  
      tap(({data}) => {
      const {allPeople} = data;
      this.peopleSubject.next(allPeople.people);
    })).subscribe();
  }
}
