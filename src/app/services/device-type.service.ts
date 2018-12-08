import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DeviceType } from '../models/device-type';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviceTypeService {

  constructor(private httpClient: HttpClient) { }

  USERS_URL = 'http://localhost:8081/api/devicetypes/';

  getDeviceTypes(): Observable<DeviceType[]> {
    return this.httpClient.get<any>
    (this.USERS_URL).pipe( map(response => {
      console.log(response);
      return response;
    }));
  }
}
