import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-user-room',
  templateUrl: './user-room.component.html',
  styleUrls: ['./user-room.component.css']
})
export class UserRoomComponent implements OnInit {

  constructor(private userService: UserService,
              private roomService: RoomService) { }

  user: User;
  rooms: Room[] = [];
  allRooms: Room[] = [];
  ngOnInit() {

    this.userService.getUser(1).subscribe(data => {
      this.user = data;
      // this.rooms.push(data.devices[0].room);
      this.user.devices.forEach(device => {
        if  (this.rooms.find(room =>
            room.id === device.room.id)) {
        } else {
           this.rooms.push(device.room);
        }
          console.log(this.rooms);
      });
    });

    this.roomService.getRooms()
      .subscribe(
        data => {
           this.allRooms = data;
      });

  }

}

