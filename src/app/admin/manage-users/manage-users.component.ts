import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { NewUser } from 'src/app/models/new-user';
import { AdminUser } from 'src/app/models/admin-user';


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  constructor(private userService: UserService) { }
  users: User[];
  /*newUser: NewUser = {
    name : '',
    lastName: '',
    email: '',
    password: ''
  };*/

  newUser: AdminUser = {
    firstName : '',
    lastName: '',
    email: '',
    password: '',
    role: 'ROLE_USER'
  };

  addUser(newUser: AdminUser): void {
    this.userService.addUser(newUser)
  .subscribe(user => this.users.push(user));

  }

  ngOnInit() {

    this.userService.getUsers()
      .subscribe(data => {
        console.log(data);
        this.users = data;
      });
  }

}
