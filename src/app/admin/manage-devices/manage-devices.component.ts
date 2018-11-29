import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/app/models/device';

@Component({
  selector: 'app-manage-devices',
  templateUrl: './manage-devices.component.html',
  styleUrls: ['./manage-devices.component.css']
})
export class ManageDevicesComponent implements OnInit {

  constructor(private deviceService: DeviceService) { }
  devices: Device[];
  ngOnInit() {

    this.deviceService.getDevices()
      .subscribe(data => {
        console.log(data);
        this.devices = data;
      });
  }
}
