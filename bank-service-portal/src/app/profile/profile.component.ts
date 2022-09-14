import { Component, isDevMode, OnInit } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { Role, User } from 'app/models/User';
import { ToastrService } from 'ngx-toastr';
import { AvailableCurrencies } from 'shared/states/currencies';
import { userIdKey } from 'shared/states/sessionStateProps';
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
    this.user = {
      id:-1,
      age:0,
      email:"",
      name:"",
      password:"",
      phoneNumber: "",
      username:"",
      role: []
    }
    let userLoginId:number = Number(sessionStorage.getItem(userIdKey));
    if (userLoginId) {
      this.loadProfile();
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
      this.loadProfile();
      this.isEdittingMode = false;
      this.updateSuccessToaster();
    },
    resp => {
      this.updateErrorToaster(resp.error.message);
    });
  }

  loadProfile(){
    let userLoginId:number = Number(sessionStorage.getItem(userIdKey));

    if (userLoginId) {
      this.profileService.getProfile(userLoginId).subscribe(resp => {
        resp.password = "";
        this.user = resp;
        this.userToUpdate = Object.assign({}, this.user);
      },
      err => {
        this.loadErrorToaster();
      });
    }
  }

  updateSuccessToaster(){
    this.toastr.success(`Profile updated successfully!`);
  }

  updateErrorToaster(message: string){
    this.toastr.error(message);
  }

  loadErrorToaster(){
    this.toastr.error(`Ran into an issue while trying to load profile!`);
  }

  loginErrorToaster(){
    this.toastr.error(`You are not logged in`);
  }
}
