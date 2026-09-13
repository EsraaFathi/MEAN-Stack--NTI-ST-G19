import { Component } from '@angular/core';
import { Iuser } from '../../models/iuser';

@Component({
  imports: [],
  selector: 'app-users',
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class Users {
  user: any = { name: 'ali', age: 30 };
  //{{user.name}}
  //{{user.age}}
  //-- array --
  //---looop >> {{user.name}}
  // for -- foreach --for of -- for in -- map
  //MODELS // data type of users >> interface // class
  users: Iuser[] = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'Password1!',
      age: 28,
      gender: 'male',
      city: 'New York',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@tech.io',
      password: 'SecurePass@2024',
      age: 34,
      gender: 'female',
      city: 'San Francisco',
    },
    {
      name: 'Ahmed Johnson',
      email: 'alex.j@domain.org',
      password: 'MyP@ssword123',
      age: 22,
      gender: 'male',
      city: 'Chicago',
    },
    {
      name: 'Emily Davis',
      email: 'emily_davis@company.net',
      password: 'Strong#1Pass',
      age: 40,
      gender: 'female',
      city: 'Austin',
    },
    {
      name: 'Michael Brown',
      email: 'mbrown@service.co',
      password: 'Code$987Safe',
      age: 20,
      gender: 'male',
      city: 'Seattle',
    },
  ];
}
