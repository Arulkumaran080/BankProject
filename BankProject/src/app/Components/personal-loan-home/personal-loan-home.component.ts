import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-loan-home',
  templateUrl: './personal-loan-home.component.html',
  styleUrls: ['./personal-loan-home.component.css']
})
export class PersonalLoanHomeComponent {
  className:string="eligibility";
  a:string="start-eligibility"
  active(a:string){
    this.className=a;
    this.a="start-"+a;
    const act=document.querySelector('.personal-loan-content-active')
    if(act){
      act.classList.remove('personal-loan-content-active')
    }
    // document.querySelector('.'+a)?.classList.add('personal-loan-content-active')
  }
}
