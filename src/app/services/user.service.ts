import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

   USERS_URL = 'http://localhost:8081/api/users/';
  // USERS_URL = 'api/users/mock-users.json';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>
    (this.USERS_URL).pipe( map(response => {
      console.log(response);
      return response;
    }));
  }

}
