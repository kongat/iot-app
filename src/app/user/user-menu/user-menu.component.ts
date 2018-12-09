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
  allRooms: Room[] = [];



  ngOnInit() {

    this.userService.getUser(1).subscribe(data => {
      this.user = data;
      this.user.devices.forEach(device => {
          this.rooms.push(device.room);
          console.log(this.rooms);

      });
      const unique_array = Array.from(new Set(this.rooms));
      console.log(unique_array);

    });
    this.roomService.getRooms()
    .subscribe(
      data => {
         this.allRooms = data;
    });


}

}
