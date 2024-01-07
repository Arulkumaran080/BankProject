import { Component } from '@angular/core';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css'],
})
export class EmiCalculatorComponent {
  p: number = 500000;
  r: number = 5;
  n: number = 2;
  EMI: number = 0;
  total: number = 0;
  showResult: boolean = false;
  a: string = '';
  b: string = '';
  c: string = '';
  loanApplication: any;
  currentUser!: User;
  userLogin: boolean = false;
  empLogin: boolean = false;

  constructor() {}

  calculate() {
    this.showResult = true;
    const r = this.r / 12 / 100;
    const n = this.n * 12;
    const numerator = (1 + r) ** n;
    const denomerator = (1 + r) ** n - 1;
    const a = this.p * r;
    const Emi = (a * numerator) / denomerator;
    this.EMI = Math.round(Emi);
    this.a = Math.round(Emi)
      .toString()
      .replace(/(\d)(?=(\d\d)+\d$)/g, '$1,');
    this.total = this.EMI * n;
    this.b = (this.total - this.p)
      .toString()
      .replace(/(\d)(?=(\d\d)+\d$)/g, '$1,');
    this.c = this.total.toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,');
  }

  reset() {
    this.showResult = false;
    this.p = 500000;
    this.r = 5;
    this.n = 2;
  }
}
