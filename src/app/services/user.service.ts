import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import {map, catchError} from 'rxjs/operators';
import { UserDevice } from '../models/user-device';
import { AdminUser } from '../models/admin-user';




@Injectable({
  providedIn: 'root'
})
export class UserService {

   USERS_URL = 'http://localhost:8081/api/users/';
   // USERS_URL = 'api/users/mock-users.json';

  constructor(private httpClient: HttpClient) { }

  addUser(adminUser: AdminUser): Observable<User> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.httpClient.post<User>(this.USERS_URL + 'addUser', adminUser, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>
    (this.USERS_URL).pipe( map(response => {
      console.log(response);
      return response;
    }));
  }

  getUser(id: number): Observable<User> {

    return this.httpClient.get<User>
      (this.USERS_URL + id);
  }

  updateUser( user: User, updatedUser: AdminUser) {
    return this.httpClient.put<User>
    (this.USERS_URL + 'updateUser/' + user.id, updatedUser);
  }

  removeDevice(userDevice: UserDevice): Observable<UserDevice> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.httpClient.post<UserDevice>(this.USERS_URL + 'removeDevice', userDevice, httpOptions)
    .pipe(
      catchError(this.handleError));
  }

  assignDevice(userDevice: UserDevice): Observable<UserDevice> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.httpClient.post<UserDevice>(this.USERS_URL + 'addDevice', userDevice, httpOptions)
    .pipe(
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
