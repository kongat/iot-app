import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  constructor(private userService: UserService) { }
  users: User[];
  ngOnInit() {

    this.userService.getUsers()
      .subscribe(data => {
        console.log(data);
        this.users = data;
      });
  }

}
