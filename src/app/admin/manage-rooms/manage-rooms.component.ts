import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-manage-rooms',
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.css']
})
export class ManageRoomsComponent implements OnInit {
  rooms: Room[];
  constructor(private roomService: RoomService) { }

  newRoom: Room = {
    id: null,
    name: '',
    devices: null
  };

  ngOnInit() {

    this.roomService.getRooms()
      .subscribe(data => {
        console.log(data);
        this.rooms = data;
      });


  }

  addRoom(newRoom: Room): void {
    this.roomService.addRoom(newRoom)
  .subscribe(room => this.rooms.push(room));


}
}
