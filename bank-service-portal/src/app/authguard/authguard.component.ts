import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-authguard',
  templateUrl: './authguard.component.html',
  styleUrls: ['./authguard.component.css']
})
export class AuthguardComponent implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem("isLoggedIn") == 'true') {
        return true;
    }else {
        this.router.navigate(["/login"]);
        return false;
    }
}

}
