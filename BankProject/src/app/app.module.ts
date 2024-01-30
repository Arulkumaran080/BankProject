import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { HomeLoanComponent } from './Components/home-loan/home-loan.component';
import { HeaderComponent } from './Components/header/header.component';
import { MatSliderModule } from '@angular/material/slider';
import { FooterComponent } from './Components/footer/footer.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ApplyNewLoanComponent } from './Components/apply-new-loan/apply-new-loan.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ContactComponent } from './Components/contact/contact.component';
import { LearnMoreComponent } from './Components/learn-more/learn-more.component';
import { PersonalLoanComponent } from './Components/personal-loan/personal-loan.component';
import { CheckEligibilityComponent } from './Components/check-eligibility/check-eligibility.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from './Components/signup/signup.component';
import { PersonalLoanEligibilityComponent } from './Components/personal-loan-eligibility/personal-loan-eligibility.component';
import { EmiCalculatorComponent } from './Components/emi-calculator/emi-calculator.component';
import { PersonalLoanHomeComponent } from './Components/personal-loan-home/personal-loan-home.component';
import { PersonalLoanDocumentsComponent } from './Components/personal-loan-documents/personal-loan-documents.component';
import { PersonalLoanApplication1Component } from './Components/personal-loan-application1/personal-loan-application1.component';
import { PersonalLoanApplication2Component } from './Components/personal-loan-application2/personal-loan-application2.component';
import { PersonalLoanApplication3Component } from './Components/personal-loan-application3/personal-loan-application3.component';
import { PersonalLoanApplication4Component } from './Components/personal-loan-application4/personal-loan-application4.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HomeLoanComponent,
    HeaderComponent,
    FooterComponent,
    AdminDashboardComponent,
    AboutUsComponent,
    ApplyNewLoanComponent,
    ContactComponent,
    LearnMoreComponent,
    PersonalLoanComponent,
    CheckEligibilityComponent,
    SignupComponent,
    PersonalLoanEligibilityComponent,
    EmiCalculatorComponent,
    PersonalLoanHomeComponent,
    PersonalLoanDocumentsComponent,
    PersonalLoanApplication1Component,
    PersonalLoanApplication2Component,
    PersonalLoanApplication3Component,
    PersonalLoanApplication4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSliderModule,
    MatSnackBarModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    NgOtpInputModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
