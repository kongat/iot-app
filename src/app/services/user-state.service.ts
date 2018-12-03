import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  user: User;

  getUser(): User {
    return this.user;
  }
  constructor() { }
}


