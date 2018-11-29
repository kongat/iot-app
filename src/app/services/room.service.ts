import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Room } from '../models/room';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  ROOMS_URL = 'http://localhost:8081/api/rooms/';

  constructor(private httpClient: HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.httpClient.get<any>
    (this.ROOMS_URL).pipe( map(response => {
      console.log(response);
      return response;
    }));
  }
}
