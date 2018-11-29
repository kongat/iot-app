import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Device } from '../models/device';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  DEVICES_URL = 'http://localhost:8081/api/devices/';

  constructor(private httpClient: HttpClient) { }


  getDevices(): Observable<Device[]> {
    return this.httpClient.get<any>
    (this.DEVICES_URL).pipe( map(response => {
      console.log(response);
      return response;
    }));
  }
}
