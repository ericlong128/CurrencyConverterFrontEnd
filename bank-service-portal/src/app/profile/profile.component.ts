import { Component, isDevMode, OnInit } from '@angular/core';
import { Customer } from 'src/shared/models/customer';

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
  constructor() { }

  ngOnInit(): void {
    this.customer = {
      emailId: "a@gmail.com",
      name: "john",
      newPassword: "abc",
      password: "abc",
      phoneNumber: "1912901",
    }
    this.customerToUpdate = Object.assign({}, this.customer);
  }

  updateEdittingMode(isEdittingMode: boolean) {
    this.isEdittingMode = isEdittingMode;
    if (!isEdittingMode) {
      this.customerToUpdate = Object.assign({}, this.customer);
    }
  }

  save() {
    this.customer = Object.assign({}, this.customerToUpdate);
    this.isEdittingMode = false;
  }
}
