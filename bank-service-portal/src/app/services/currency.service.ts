import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Rate {
  info: {
    rate: number
  }
}

@Injectable()
export class CurrencyService {

  result!: Observable<Rate>;

  constructor(private http: HttpClient) {}


  getRate(fromCurr:string, toCurr:string) {
    const URL: string = 'https://api.exchangerate.host';
    const params = new HttpParams()
      .set('from', fromCurr)
      .set('to', toCurr)
    return this.http.get<Rate>(URL + '/convert?', {params});
  }
}