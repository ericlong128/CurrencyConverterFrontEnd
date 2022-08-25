import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'app/services/profile.service';
import { User } from 'app/models/User';
import { AppComponent } from 'app/app.component';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  public users: User[] = [];
  currentUser: User = this.app.currentUser;
  constructor(private userService: ProfileService, private app: AppComponent) { }
  
  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    })
  }

}
