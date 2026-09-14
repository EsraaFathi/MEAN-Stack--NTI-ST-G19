import { Component, inject } from '@angular/core';
import { Iuser } from '../../models/iuser';
import { UserCard } from './user-card/user-card';
import { UserService } from '../../services/user-service';

@Component({
  imports: [UserCard],
  selector: 'app-users',
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class Users {
  private UserService = inject(UserService);
  usersData!: Iuser[];

  constructor() {
    this.usersData = this.UserService.getUsers();
  }
}
