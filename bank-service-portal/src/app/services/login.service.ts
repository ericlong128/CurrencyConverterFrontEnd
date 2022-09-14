import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { userIdKey } from 'shared/states/sessionStateProps';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type' : 'application/json'
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpCli : HttpClient, private router : Router) { }

  user : User = <User>{};
  username : string = "";
  password: string = "";  


  login(username : string, password : string) {
    return this.httpCli.post<User>(`http://localhost:8100/api/auth/signin`, {
      "usernameOrEmail" : username,
      "password" : password});
  }

  checkSession() {
    return this.httpCli.get<any>(`localhost:4200/api/customers/${this.username}`, {
      withCredentials : true
    });
  }

  logout() {
    sessionStorage.removeItem(userIdKey);
    return this.httpCli.delete<any>(`localhost:4200/api/customers/${this.username}`, {
      withCredentials : true
    });
  }

  register(user: User): Observable<User> {      
    return this.httpCli.post<User>('http://localhost:8100/api/auth/signup', user);      
  }

  handleError(error: { status: any; error: { error: any; message: any; }; }) {    
    let errorMessage = `Error Code: ${error.status} - ${error.error.error} \nMessage: ${error.error.message}`;
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}


