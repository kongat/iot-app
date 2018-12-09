import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/app/models/device';
import * as _ from 'lodash';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  room: Room;
  mobile: boolean;
  availableDevices: Device[];
  draggedDevice: Device;


  constructor(private route: ActivatedRoute,
              private roomService: RoomService,
              private deviceService: DeviceService) { }

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.roomService.getRoom(id)
    .subscribe(data => {
      console.log(data);
      this.room = data;
      this.deviceService.getDevices()
          .subscribe(devices => {
            this.availableDevices = _.differenceBy( devices, this.room.devices, 'id');
      });
    });
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
    }
  }

  deleteRoom(room: Room): void {
    this.roomService.deleteRoom(room).subscribe();
  }

  /* addDeviceToRoom(deviceId: number) {

    this.roomService.assignDevice(this.userDevice).subscribe();
  }*/
  /*drag n drop
  dragStart(event, device: Device) {
    this.draggedDevice = device;
  }

  drop(event) {
    if (this.draggedDevice) {
      const draggedDeviceIndex = this.findIndex(this.draggedDevice);
      this.room.devices = [...this.room.devices, this.draggedDevice];
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
  */

}
