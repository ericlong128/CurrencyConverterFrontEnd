import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router : Router, private app: AppComponent, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['']);
    sessionStorage.setItem('loggedIn', String(false));
    this.app.loggedIn = false;
    this.logoutSuccess();
  }

  profile() {
    this.router.navigate(['/profile']);
  }

  logoutSuccess(){
    this.toastr.success(`Successfully logged out`);
  }
}
