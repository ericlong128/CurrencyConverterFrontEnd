import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpCli : HttpClient, private router : Router) { }

  user : User = <User>{};
  username : string = "";
  password: string = "";


  login(username : string, password : string) {
    return this.httpCli.post<any>(`localhost:4200/api/customers`, {
      "username" : username,
      "password" : password}, {
      withCredentials : true
    });
  }

  checkSession() {
    return this.httpCli.get<any>(`localhost:4200/api/customers/${this.username}`, {
      withCredentials : true
    });
  }

  logout() {
    return this.httpCli.delete<any>(`localhost:4200/api/customers/${this.username}`, {
      withCredentials : true
    });
  }



}
