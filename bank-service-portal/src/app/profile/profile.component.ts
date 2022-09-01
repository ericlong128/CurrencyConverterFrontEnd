import { Component, isDevMode, OnInit } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { User } from 'app/models/User';
import { ToastrService } from 'ngx-toastr';
import { AvailableCurrencies } from 'shared/states/currencies';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  user: User;
  userToUpdate: User;
  updating: string;
  isEdittingMode: boolean = false;
  showToast: boolean = false;
  message: string = "Saved successfully!!";
  availableCurrencies: string[];

  constructor(private profileService: ProfileService,  private app : AppComponent, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.app.currentUser) {
      this.user = this.app.currentUser;
      this.profileService.getProfile(this.user.id).subscribe(resp => {
        this.user = resp;
        this.userToUpdate = Object.assign({}, this.user);
      },
      err => {
        this.loadErrorToaster();
      });
    }
    else {
      this.loginErrorToaster();
    }
    
    this.availableCurrencies = AvailableCurrencies;
  }

  updateEdittingMode(isEdittingMode: boolean) {
    this.isEdittingMode = isEdittingMode;
    if (!isEdittingMode) {
      this.userToUpdate = Object.assign({}, this.user);
    }
  }

  save() {
    this.profileService.updateProfile(this.userToUpdate).subscribe(resp => {
      this.user = resp;
      this.userToUpdate = Object.assign({}, this.user);
      this.isEdittingMode = false;
      this.updateSuccessToaster();
    },
    err => {
      this.updateErrorToaster();
    });
  }
  updateSuccessToaster(){
    this.toastr.success(`Profile updated successfully!`);
  }

  updateErrorToaster(){
    this.toastr.error(`Ran into an issue updating profile`);
  }

  loadErrorToaster(){
    this.toastr.error(`Ran into an issue while trying to load profile!`);
  }

  loginErrorToaster(){
    this.toastr.error(`You are not logged in`);
  }
}
