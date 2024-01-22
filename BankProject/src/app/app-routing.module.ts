import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Components/login/login.component';
import { HomeLoanComponent } from './Components/home-loan/home-loan.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ApplyNewLoanComponent } from './Components/apply-new-loan/apply-new-loan.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LearnMoreComponent } from './Components/learn-more/learn-more.component';
import { PersonalLoanComponent } from './Components/personal-loan/personal-loan.component';
import { CheckEligibilityComponent } from './Components/check-eligibility/check-eligibility.component';
import { SignupComponent } from './Components/signup/signup.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PersonalLoanEligibilityComponent } from './Components/personal-loan-eligibility/personal-loan-eligibility.component';
import { EmiCalculatorComponent } from './Components/emi-calculator/emi-calculator.component';
import { PersonalLoanHomeComponent } from './Components/personal-loan-home/personal-loan-home.component';
import { PersonalLoanApplication1Component } from './Components/personal-loan-application1/personal-loan-application1.component'; 

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home-loan', component: HomeLoanComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'apply-newloan', component: ApplyNewLoanComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'learn-more', component: LearnMoreComponent },
  { path: 'personal-loan', component: PersonalLoanComponent },
  { path: 'check-eligibility', component: CheckEligibilityComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'personalLoanEligibility',
    component: PersonalLoanEligibilityComponent,
  },
  { path: 'emiCalculator', component: EmiCalculatorComponent },
  { path: 'personalLoanHome', component: PersonalLoanHomeComponent },
  {
    path: 'personalLoan/necessaryInformation',
    component: PersonalLoanApplication1Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
