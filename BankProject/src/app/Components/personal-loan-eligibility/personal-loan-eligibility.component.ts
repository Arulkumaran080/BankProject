import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-loan-eligibility',
  templateUrl: './personal-loan-eligibility.component.html',
  styleUrls: ['./personal-loan-eligibility.component.css'],
})
export class PersonalLoanEligibilityComponent {
  showContent: boolean = false;
  showContentButton: string = 'show more';

  monthlyIncome: number = 30000;
  existingEMI: number = 0;
  n: number = 12;
  result: number = 0;
  result1: string = '0';

  showEligibilityContent() {
    if (!this.showContent) {
      this.showContentButton = 'show less';
      this.showContent = !this.showContent;
    } else {
      this.showContentButton = 'show more';
      this.showContent = !this.showContent;
    }
  }

  calculate() {
    if (this.monthlyIncome < 30000) {
      alert('Your monthly income should be greater then 30000');
    } else if (this.monthlyIncome > 4000000) {
      alert('your monthly income within the range of 30,000 - 40,00,000');
    }
    // if((this.monthlyIncome/2)<this.existingEMI){
    //   alert("you cant apply loan with you existing EMI's")
    // }
    if (this.n < 12) {
      alert('enter tenure altest 12 months');
    } else if (this.n > 72) {
      alert('enter tenure between 12 - 72 months');
    }
    let a = this.monthlyIncome * 0.58;
    if (this.existingEMI != 0) {
      a = a - this.existingEMI;
    }
    let r = 0.007;
    let neumerator = a * ((1 + r) ** this.n - 1);
    let denominator = 0.007 * (1 + r) ** this.n;
    this.result = neumerator / denominator;
    console.log(this.result)
    if (this.result < 0) {
      this.result = 0;
    }else if(this.result>5000000){
      this.result=5000000
    }
    else{
      this.result = Math.round(this.result);
    }
    this.result1 = this.result.toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,');
  }
}
