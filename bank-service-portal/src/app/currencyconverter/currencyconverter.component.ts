import { Component, OnInit } from '@angular/core';
import { CurrencyService, Rate } from '../services/currency.service';


@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrls: ['./currencyconverter.component.css'],
  providers: [CurrencyService]
})
export class CurrencyconverterComponent implements OnInit {

  constructor(private currencyService: CurrencyService) {}
  firstRate!: number;
  secondRate!: number;
  thirdRate!: number;
  fourthRate!: number;
  fifthRate!: number;
  sixthRate!: number;
  seventhRate!: number;
  eighthRate!: number;
  currentDate: Date = new Date;

  firstCurrency: string = 'USD';
  secondCurrency: string = 'EUR';
  currentRate!: number;
  firstInputValue: any;
  secondInputValue: any;

  ngOnInit() {
    this.getCourse();
    this.getRate(this.firstCurrency, this.secondCurrency);
  }

  roundValue(value: number) {
    return Math.round(value * 100) / 100;
  }

  getCourse() {
    this.getFirstRate();
    this.getSecondRate();
    this.getThirdRate();
    this.getFourthRate();
    this.getFifthRate();
    this.getSixthRate();
    this.getSeventhRate();
    this.getEighthRate();
  }

  getFirstRate() {
    return this.currencyService.getRate('USD', 'INR')
      .subscribe(
        (data: Rate) => this.firstRate = data.info.rate
      );
  }

  getSecondRate() {
    return this.currencyService.getRate('USD', 'EUR')
      .subscribe(
        (data: Rate) => this.secondRate = data.info.rate
      )
  }

  getThirdRate() {
    return this.currencyService.getRate('USD', 'JPY')
      .subscribe(
        (data: Rate) => this.thirdRate = data.info.rate
      )
  }
  getFourthRate() {
    return this.currencyService.getRate('USD', 'GBP')
      .subscribe(
        (data: Rate) => this.fourthRate = data.info.rate
      )
  }
  getFifthRate() {
    return this.currencyService.getRate('USD', 'CAD')
      .subscribe(
        (data: Rate) => this.fifthRate = data.info.rate
      )
  }
  getSixthRate() {
    return this.currencyService.getRate('USD', 'CNY')
      .subscribe(
        (data: Rate) => this.sixthRate = data.info.rate
      )
  }
  getSeventhRate() {
    return this.currencyService.getRate('USD', 'AUD')
      .subscribe(
        (data: Rate) => this.seventhRate = data.info.rate
      )
  }
  getEighthRate() {
    return this.currencyService.getRate('USD', 'RUB')
      .subscribe(
        (data: Rate) => this.eighthRate = data.info.rate
      )
  }

  selectFirstCurr(event: any) {
    this.firstCurrency = event.target.value;
    this.getRate(this.firstCurrency, this.secondCurrency);
    this.secondInputValue = '';
    this.firstInputValue = '';
  }

  selectSecondCurr(event: any) {
    this.secondCurrency = event.target.value;
    this.getRate(this.firstCurrency, this.secondCurrency);
    this.secondInputValue = '';
    this.firstInputValue = '';
  }


  getRate(fromCurr: string, toCurr: string) {
    return this.currencyService.getRate(fromCurr, toCurr)
      .subscribe(
        (data: Rate) => this.currentRate = data.info.rate
      );
  }


  countCurrency(value: number) {
    const result: number = value * this.currentRate;
    this.secondInputValue = Math.round(result * 100) / 100;
  }

  reverseCount(value: number) {
    const result: number =  value / this.currentRate;
    this.firstInputValue = Math.round(result * 100) / 100;
  }

  firstInput() {
    if(isNaN(this.firstInputValue)) {
      this.secondInputValue = 'Please enter a number';
    } else {
      this.countCurrency(this.firstInputValue);
    }

  }

  secondInput() {
    if(isNaN(this.secondInputValue)) {
      this.firstInputValue = 'Please enter a number';
    } else {
      this.reverseCount(this.secondInputValue);
    }
  }
}
