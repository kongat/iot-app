import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/app/models/device';
import { Room } from 'src/app/models/room';
import { DeviceType } from 'src/app/models/device-type';
import { DeviceTypeService } from 'src/app/services/device-type.service';
import { RoomService } from 'src/app/services/room.service';
import { AdminDevice } from 'src/app/models/admin-device';

@Component({
  selector: 'app-manage-devices',
  templateUrl: './manage-devices.component.html',
  styleUrls: ['./manage-devices.component.css']
})
export class ManageDevicesComponent implements OnInit {

  constructor(private deviceService: DeviceService,
              private roomService: RoomService,
              private deviceTypeService: DeviceTypeService) { }
  devices: Device[];
  rooms: Room[];
  deviceTypes: DeviceType[];

  newDevice: AdminDevice = {
    value: null,
    status: null,
    name: '',
    room: '',
    deviceType: '',
  };

  addDevice(newDevice: AdminDevice): void {
    this.deviceService.addDevice(newDevice)
  .subscribe(device => this.devices.push(device));

  }
  ngOnInit() {

    this.deviceService.getDevices()
      .subscribe(data => {
        console.log(data);
        this.devices = data;
      });

      this.deviceTypeService.getDeviceTypes()
        .subscribe(
          types => this.deviceTypes = types
        );

      this.roomService.getRooms()
      .subscribe(
        data => this.rooms = data
      );
  }
}
