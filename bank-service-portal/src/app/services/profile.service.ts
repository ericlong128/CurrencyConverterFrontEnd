import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/shared/models/customer';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(username: string) {
    const URL: string = 'placeholderurl';
    const params = new HttpParams()
      .set('username', username);
    return this.http.get<Customer>(URL + '/getProfile?', {params});
  }

  updateProfile(customer: Customer) {
    const URL: string = 'placeholderurl';

    return this.http.post<Customer>(URL + '/update', customer);
  }
}
