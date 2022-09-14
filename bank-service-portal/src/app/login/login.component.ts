import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { userIdKey } from 'shared/states/sessionStateProps';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router : Router, private loginService: LoginService, private app : AppComponent, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.username = "";
    this.password = "";
  }

  login(){
    // Need to get the email and password from the form here
    this.loginService.login(this.username, this.password).subscribe((user) => {
      this.router.navigate(['/home']);
      sessionStorage.setItem("loggedIn", String(true));
      sessionStorage.setItem(userIdKey, String(user.id));
      this.app.loggedIn = true;
      this.app.updateUserData(user);
      this.loginSuccessToaster();
    }
    , (errResponse: any) => {
      this.loginErrorToaster();
    });
  }

  loginSuccessToaster(){
    this.toastr.success(`Successfully logged in as ${this.username}`)
  }

  loginErrorToaster(){
    this.toastr.error(`Could not find matching password/username for user: ${this.username}`)
  }

  
}


