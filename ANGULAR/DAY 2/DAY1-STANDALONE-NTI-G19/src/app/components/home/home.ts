import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Iuser } from '../../models/iuser';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  //users
  private UserService = inject(UserService);

  UserArray!: Iuser[];

  constructor() {
    this.UserArray = this.UserService.getUsers();
    console.log(this.UserArray);
  }
}
