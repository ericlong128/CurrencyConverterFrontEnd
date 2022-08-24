import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { User, Role } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank-service-portal';
  loggedIn: boolean = false;
  public currentUser: User;
  public isAdmin = false;
  public currentUserId: number;

  constructor(private router : Router) { }

  home(){
    this.router.navigate(['/home']);
  }

  profile(){
    this.router.navigate(['/profile']);
  }

  updateUserData(currentUser: User): void {
    this.currentUser = currentUser;
    this.currentUserId = currentUser.id;
    if(currentUser.role[0].name!='ROLE_ADMIN'){
      this.isAdmin = false;
    } else {
      this.isAdmin = true;
    }
  }

}
