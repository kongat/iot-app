import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/app/models/device';
import { User } from 'src/app/models/user';
import { UserDevice } from 'src/app/models/user-device';
import { UserService } from 'src/app/services/user.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  constructor(private deviceService: DeviceService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  device: Device;
  userDevice: UserDevice;

  nonAssignedUsers: User[];

  draggedUser: User;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.deviceService.getDevice(id)
    .subscribe(data => {
      console.log(data);
      this.device = data;
      this.userService.getUsers()
          .subscribe(users => {
            this.nonAssignedUsers = _.differenceBy( users, this.device.users, 'id');
      });
    });
  }

  saveDevice() {
    this.deviceService.updateDevice(this.device)
      .subscribe(data => {
        console.log();
        this.device = data;
      });
  }

  unassignUser(unassignedUser: User) {
    this.userDevice = {
      userId: unassignedUser.id,
      deviceId: this.device.id
    };

    this.device.users = this.device.users.filter(
      user => user.id !== unassignedUser.id
    );

    this.nonAssignedUsers.push(unassignedUser);

    this.userService.removeDevice(this.userDevice).subscribe();
  }

  assignUser(userId: number) {
    this.userDevice = {
      userId: userId,
      deviceId: this.device.id
    };
    this.userService.assignDevice(this.userDevice).subscribe();
  }

  // drag n drop

  dragStart(event, user: User) {
    this.draggedUser = user;
  }

  drop(event) {
    if (this.draggedUser) {
      const draggedUserIndex = this.findIndex(this.draggedUser);
      this.device.users = [...this.device.users, this.draggedUser];
      this.nonAssignedUsers = this.nonAssignedUsers.filter((val, i) => {
        return i !== draggedUserIndex;
      });
      this.assignUser(this.draggedUser.id);
      this.draggedUser = null;
    }
  }
  dragEnd(event) {
    this.draggedUser = null;
  }

  findIndex(user: User) {
    let index = -1;
    for (let i = 0; i < this.nonAssignedUsers.length; i++) {
      if (user.id === this.nonAssignedUsers[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
