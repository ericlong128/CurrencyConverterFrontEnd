import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router : Router, private loginService: LoginService, private app : AppComponent) { }

  ngOnInit(): void {
    this.username = "";
    this.password = "";
  }

  home(){
    // Need to get the email and password from the form here
    this.loginService.login(this.username, this.password).subscribe((response: any) => {
      this.router.navigate(['/home']);
      sessionStorage.setItem("loggedIn", String(true));
      this.app.loggedIn = true;
    }
    , (errResponse: any) => {
      alert(errResponse.error.error);
    });
  }

  
}


