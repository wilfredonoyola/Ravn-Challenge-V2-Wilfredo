import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable, of } from 'rxjs';
import { catchError, pluck, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private apollo: Apollo) {}

  /**
   * Return a new query
   * @param first - number of results per page
   * @param after - optional value, pointer to get other results
   * @returns
   */
  private getQuerie(first: number, after?: string): DocumentNode {
    const _after = after ? after : '';
    const query = gql`
    {
      allPeople(first: ${first}, after: "${_after}") {
        pageInfo{
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
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
    return query;
  }

  /**
   * Return a new query to detail of a person
   * @param personId - number of a person id
   * @returns
   */
  private getQueriePersonDetail(personId: number): DocumentNode {
    const query = gql`
      {
        person(id: "${personId}") {
          id
          name
          homeworld {
            name
            id
          }
          eyeColor
          hairColor
          skinColor
          birthYear
          vehicleConnection {
            vehicles {
              name
            }
          }
        }
      }
    `;
    return query;
  }

  /**
   * Get people by pagination
   * @param first - number of results per page
   * @param after - optional value, pointer to get other results
   * @returns
   */
  getPeopleByPage(first: number, after?: string): Observable<any> {
    const QUERY = this.getQuerie(first, after);

    return this.apollo
      .watchQuery<any>({
        query: QUERY,
      })
      .valueChanges.pipe(
        take(1),
        pluck('data', 'allPeople'),
        tap(() => {}),
        catchError(this.handleError<any[]>('getPeople', []))
      );
  }

  /**
   * Get person detail
   * @param personId - number id to get a detail person
   * @returns
   */
  getPersonDetail(personId: number): Observable<any> {
    const QUERY = this.getQueriePersonDetail(personId);

    return this.apollo
      .watchQuery<any>({
        query: QUERY,
      })
      .valueChanges.pipe(
        take(1),
        pluck('data', 'person'),
        tap(() => {}),
        catchError(this.handleError<any[]>('getPersonDetail', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // console.error(error) // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`dataService: ${message}`);
  }
}
