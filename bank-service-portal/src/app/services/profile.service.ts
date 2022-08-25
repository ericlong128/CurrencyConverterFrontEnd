import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/User';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const userUrl = 'http://localhost:8100/api/customers';
    return this.http.get<User[]>(userUrl).pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      console.log('An error has occured: ', httpError.error.message);
    } else {
      console.error(`Backend return code ${httpError.status} body was: ${httpError.error}`)
    }

    return throwError(() => new Error('Unrecognized Error, try again'));

  getProfile(id: string) {
    const URL: string = 'http://localhost:8100/api/customers/'+id;
    return this.http.get<User>(URL);
  }

  updateProfile(user: User) {
    const URL: string = 'http://localhost:8100/api/customers';

    return this.http.put<User>(URL, user);

  }
}
