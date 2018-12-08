import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Device } from '../models/device';
import {map, find, catchError} from 'rxjs/operators';
import { AdminDevice } from '../models/admin-device';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  DEVICES_URL = 'http://localhost:8081/api/devices/';

  constructor(private httpClient: HttpClient) { }

  addDevice(device: AdminDevice): Observable<Device> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.httpClient.post<any>(this.DEVICES_URL + 'newDevice', device, httpOptions).pipe(
      catchError(this.handleError)
    );
  }


  getDevices(): Observable<Device[]> {
    return this.httpClient.get<any>
    (this.DEVICES_URL).pipe( map(response => {
      // console.log(response);
      return response;
    }));
  }

  getDevice(id: number): Observable<Device> {

    return this.httpClient.get<any>
      (this.DEVICES_URL + id);
  }

  updateDevice(updatedDevice: AdminDevice, device: Device) {
    return this.httpClient.put<Device>
    (this.DEVICES_URL + 'updateDevice/' + device.id, updatedDevice);
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
