import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';
import { IuserResponse } from '../../models/iuser-response';
import { FormsModule, NgModel } from '@angular/forms';
import { Iuser } from '../../models/iuser';

@Component({
  imports: [FormsModule],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {
  private UserService = inject(UserService);

  newUser: Iuser = {
    name: '',
    email: '',
    password: undefined,
    age: undefined,
  };

  //newuser
  addNewUser() {
    this.UserService.register(this.newUser).subscribe({
      next: (res: IuserResponse) => {
        console.log(this.newUser);

        if (res.err) {
          console.log(res.err);
          alert('error occured');
        } else if (res.message == 'users added successfully') {
          console.log(res);
          alert('U R WELCOME TO MY SITE ');
        }
      },
      error: (err) => {
        console.log('err when register user', err);
        alert('err occured ,PLZ TRY AGAIN');
      },
      complete: () => {},
    });
  }

  constructor() {}
}
