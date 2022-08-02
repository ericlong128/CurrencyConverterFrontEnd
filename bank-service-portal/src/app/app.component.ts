import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank-service-portal';
  loggedIn: boolean = false;

  constructor(private router : Router) { }

  home(){
    this.router.navigate(['/home']);
  }

  profile(){
    this.router.navigate(['/profile']);
  }

}
