import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router : Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  home(){
    // Need to get the email and password from the form here
    this.loginService.login("johnsmith@infosys.com", "abc").subscribe((response: any) => {
      this.router.navigate(['/home']);
      sessionStorage.setItem("loggedIn", String(true));
    }
    , (errResponse: any) => {
      alert(errResponse.error.error);
    });
  }

  
}


