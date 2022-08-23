import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { RequestRegistration } from 'app/models/RequestRegistration';

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
  registrationUrl = "http://localhost:8100/api/auth/signup"  


  login(username : string, password : string) {
    return this.httpCli.post<any>(`http://localhost:8100/api/auth/signin`, {
      "usernameOrEmail" : username,
      "password" : password});
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

    register(requestRegistrationDTO: RequestRegistration): Observable<any> {      
      return this.httpCli.post<any>(
        this.registrationUrl, 
        requestRegistrationDTO, 
        httpOptions
        ).pipe(
            retry(1),
            catchError(this.handleError)
        )          
    }
  
    handleError(error: { status: any; error: { error: any; message: any; }; }) {    
      let errorMessage = `Error Code: ${error.status} - ${error.error.error} \nMessage: ${error.error.message}`;
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
  }


