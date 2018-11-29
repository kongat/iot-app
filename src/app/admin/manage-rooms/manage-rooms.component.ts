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

  ngOnInit() {

    this.roomService.getRooms()
      .subscribe(data => {
        console.log(data);
        this.rooms = data;
      });


  }

}
