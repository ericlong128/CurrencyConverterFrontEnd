import { Component, isDevMode, OnInit } from '@angular/core';
import { Customer } from 'src/shared/models/customer';
import { AvailableCurrencies } from 'src/shared/states/currencies';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  customer: Customer;
  customerToUpdate: Customer;
  updating: string;
  isEdittingMode: boolean = false;
  showToast: boolean = false;
  message: string = "Saved successfully!!";
  availableCurrencies: string[];

  ngOnInit(): void {
    this.customer = {
      username: "johnsmith",
      firstName: "John",
      lastName: "Smith",
      email: "johnsmith@infosys.com",
      phoneNumber: "1234567890",
      defaultCurrency: "INR",
    }
    this.customerToUpdate = Object.assign({}, this.customer);
    this.availableCurrencies = AvailableCurrencies;
    console.log(this.availableCurrencies);
  }

  updateEdittingMode(isEdittingMode: boolean) {
    this.isEdittingMode = isEdittingMode;
    if (!isEdittingMode) {
      this.customerToUpdate = Object.assign({}, this.customer);
    }
  }

  save() {
    console.log("saved",this.customerToUpdate);
    this.customer = Object.assign({}, this.customerToUpdate);
    this.isEdittingMode = false;
    this.showToast = true;
    setTimeout(() => {this.showToast = false}, 1500);
  }
}
