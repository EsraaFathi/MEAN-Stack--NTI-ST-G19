import { inject, Service } from '@angular/core';
import { Iuser } from '../models/iuser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IuserResponse } from '../models/iuser-response';
import { IloginData } from '../models/ilogin-data';
// D.I
@Service()
export class UserService {
  users!: Iuser[];
  private http = inject(HttpClient);
  // get users from api
  // http request --- url --method -- body --headers
  // fetch(url ,{ methode :"post",body:{data} ,headers:{}}).then().catch
  // fetch >ES6>return promise
  getUsers(): Observable<IuserResponse> {
    //1-httpClient >> call api >> return observable// way for async
    // observable >> rxjs
    //2-recive res from api >>subscribe({next () , error() , complete()})
    return this.http.get<IuserResponse>('http://localhost:5000/users');
  }

  register(newUser: Iuser): Observable<IuserResponse> {
    //1-req to api
    //2-rec res from api
    return this.http.post<IuserResponse>('http://localhost:5000/users', newUser);
  }
  //update // delete

  /// {email , password}
  login(loginData: IloginData): Observable<IuserResponse> {
    return this.http.post<IuserResponse>('http://localhost:5000/users/login', loginData);
  }
}
