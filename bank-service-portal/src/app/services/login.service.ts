import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpCli : HttpClient, private router : Router) { }

  login(username : string, password : string) {
    return this.httpCli.post<any>(`localhost:4200/session`, {
      "username" : username,
      "password" : password}, {
      withCredentials : true
    };
  }

  checkSession() {
    return this.httpCli.get<any>(`localhost:4200/session`, {
      withCredentials : true
    });
  }


}
