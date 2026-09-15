import { Component, inject } from '@angular/core';
import { Iuser } from '../../models/iuser';
import { UserCard } from './user-card/user-card';
import { UserService } from '../../services/user-service';
import { IuserResponse } from '../../models/iuser-response';

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
    //2-recive res from api >>subscribe({next () , error() , complete()})
    this.UserService.getUsers().subscribe({
      next: (res: IuserResponse) => {
        console.log(res);
        if (res.data) {
          this.usersData = res.data;
        }
        // console.log(this.usersData);
      }, //success
      error: (err) => {
        console.log('err when fetching users', err);
        alert('err when fetching users ,PLZ TRY AGAIN');
      }, //catch --crash
      complete: () => {
        console.log('completed');
      }, //operation is finished //get data
    });
  }
}
