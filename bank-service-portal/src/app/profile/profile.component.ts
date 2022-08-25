import { Component, isDevMode, OnInit } from '@angular/core';
import { User } from 'app/models/User';
import { AvailableCurrencies } from 'shared/states/currencies';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  customer: User;
  customerToUpdate: User;
  updating: string;
  isEdittingMode: boolean = false;
  showToast: boolean = false;
  message: string = "Saved successfully!!";
  availableCurrencies: string[];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    // this.customer = {
    //   email: "",
    //   name: "",
    //   // location: "",
    //   id: 1,
    //   phoneNumber: "",
    //   username: "",
    // }
    this.profileService.getProfile(1).subscribe(resp => {
      console.log(resp);
      this.customer = resp;
      this.customerToUpdate = Object.assign({}, this.customer);
    },
    err => {
      alert("Ran into an issue while trying to load profile");
    });
    
    this.availableCurrencies = AvailableCurrencies;
  }

  updateEdittingMode(isEdittingMode: boolean) {
    this.isEdittingMode = isEdittingMode;
    if (!isEdittingMode) {
      this.customerToUpdate = Object.assign({}, this.customer);
    }
  }

  save() {
    this.profileService.updateProfile(this.customerToUpdate).subscribe(resp => {
      this.customer = resp;
      this.customerToUpdate = Object.assign({}, this.customer);
      this.isEdittingMode = false;
      this.showToast = true;
    },
    err => {
      alert("Ran into an issue while trying to update profile");
    });
  }
}
