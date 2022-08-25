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

  login(){
    // Need to get the email and password from the form here
    this.loginService.login(this.username, this.password).subscribe((data) => {
      this.router.navigate(['/home']);
      sessionStorage.setItem("loggedIn", String(true));
      this.app.loggedIn = true;
      this.app.updateUserData(data);
      console.log(data);
      console.log(this.app.currentUser);
      console.log(this.app.currentUserId);
      console.log(this.app.isAdmin);
    }
    , (errResponse: any) => {
      alert(errResponse.error.error);
    });
  }

  
}


