import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(private userService: UserService, private roomService: RoomService) { }
  user: User;
  rooms: Room[] = [];



  ngOnInit() {

      this.userService.getUser(1).subscribe(data => {
        this.user = data;
        // get the room that the user has devices in
        this.user.devices.forEach(device => {
          if  (this.rooms.find(room =>
              room.id === device.room.id)) {
          } else {
             this.rooms.push(device.room);
          }
            console.log(this.rooms);
        });
      });

  }

}
