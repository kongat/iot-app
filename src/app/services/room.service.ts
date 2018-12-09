import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Room } from '../models/room';
import {map, catchError} from 'rxjs/operators';
import { Device } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  ROOMS_URL = 'http://localhost:8081/api/rooms/';

  constructor(private httpClient: HttpClient) { }

  addRoom(room: Room): Observable<Room> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.httpClient.post<Room>(this.ROOMS_URL + 'newRoom', room, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  deleteRoom (room: Room): Observable<Room> {
    return this.httpClient.delete<Room>(this.ROOMS_URL + room.id);
  }

  getRooms(): Observable<Room[]> {
    return this.httpClient.get<any>
    (this.ROOMS_URL).pipe( map(response => {
      console.log(response);
      return response;
    }));
  }

  getRoom(id: number): Observable<Room> {

    return this.httpClient.get<any>
      (this.ROOMS_URL + id);
  }

  updateRoom(room: Room) {
    return this.httpClient.put<Room>
    (this.ROOMS_URL + room.id, room);
  }

  /*assignDevice(userDevice: Device): Observable<Device[]> {

    return this.httpClient.get<Device[]>(this.ROOMS_URL + 'addDevice')
    .pipe(
      catchError(this.handleError));
  }
*/
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
