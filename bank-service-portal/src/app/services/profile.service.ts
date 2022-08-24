import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'shared/models/customer';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(id: string) {
    const URL: string = 'http://localhost:8100/api/customers/'+id;
    return this.http.get<Customer>(URL);
  }

  updateProfile(customer: Customer) {
    const URL: string = 'http://localhost:8100/api/customers';

    return this.http.put<Customer>(URL, customer);
  }
}
