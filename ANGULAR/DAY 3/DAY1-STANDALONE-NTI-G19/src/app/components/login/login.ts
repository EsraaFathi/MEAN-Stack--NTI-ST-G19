import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';
import { IuserResponse } from '../../models/iuser-response';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  //email, pass
  loginForm!: FormGroup;
  private UserService = inject(UserService);
  // -- formBuilder -- validator
  private fb = inject(FormBuilder);

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: '',
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Form Data:', this.loginForm.value);

      this.UserService.login(this.loginForm.value).subscribe({
        next: (res: IuserResponse) => {
          console.log(res);
          //  % >>login
          //err handling
          if (res.message == '"INVALID EMAIL OR PASSWORD"') {
            alert('"INVALID EMAIL OR PASSWORD"');
          } else if (res.message == ' PLZ,ENTER EMAIL && PASSWORD') {
            alert(' PLZ,ENTER EMAIL && PASSWORD');
          } else if (res.message == 'U LOGGED SUCESSFULLY ') {
            alert('U LOGGED SUCESSFULLY ');
            //10000000 % login
          }
        },
        error: (err: any) => {
          console.log('err when login user', err);
          alert('err occured ,PLZ TRY AGAIN');
        },
        complete: () => {},
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
