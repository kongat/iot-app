import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserDevice } from 'src/app/models/user-device';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/models/device';
import { DeviceService } from 'src/app/services/device.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  availableDevices: Device[];

  selectedDevices: Device[];

  allDevices: Device[];

  draggedDevice: Device;

  user: User;
  userDevice: UserDevice;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private deviceService: DeviceService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.userService.getUser(id).subscribe(data => {
      this.user = data;

      // get the devices that the user has no acces to
      // these devices will be availale for drag
      this.deviceService.getDevices()
          .subscribe(devices => {
            this.availableDevices = _.differenceBy( devices, this.user.devices, 'id');
      });
    });
  }

  saveUser() {
    this.userService.updateUser(this.user).subscribe(data => {
      console.log();
      this.user = data;
    });
  }

  unassignDevice(unassignedDevice: Device) {
    this.userDevice = {
      userId: this.user.id,
      deviceId: unassignedDevice.id
    };

    this.user.devices = this.user.devices.filter(
      device => device.id !== unassignedDevice.id
    );

    this.availableDevices.push(unassignedDevice);

    this.userService.removeDevice(this.userDevice).subscribe();
  }

  assignDevice(deviceId: number) {
    this.userDevice = {
      userId: this.user.id,
      deviceId: deviceId
    };



    this.userService.assignDevice(this.userDevice).subscribe();
  }

  // drag n drop

  dragStart(event, device: Device) {
    this.draggedDevice = device;
  }

  drop(event) {
    if (this.draggedDevice) {
      const draggedDeviceIndex = this.findIndex(this.draggedDevice);
      this.user.devices = [...this.user.devices, this.draggedDevice];
      this.availableDevices = this.availableDevices.filter((val, i) => {
        return i !== draggedDeviceIndex;
      });
      this.assignDevice(this.draggedDevice.id);
      this.draggedDevice = null;
    }
  }
  dragEnd(event) {
    this.draggedDevice = null;
  }

  findIndex(device: Device) {
    let index = -1;
    for (let i = 0; i < this.availableDevices.length; i++) {
      if (device.id === this.availableDevices[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
