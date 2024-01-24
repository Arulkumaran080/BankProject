import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import Validation from 'src/app/Models/validation';
import { DataService } from 'src/app/Services/data.service';
import { MailService } from 'src/app/Services/mail.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-personal-loan-application1',
  templateUrl: './personal-loan-application1.component.html',
  styleUrls: ['./personal-loan-application1.component.css'],
})
export class PersonalLoanApplication1Component implements OnInit {
  form1!: FormGroup;
  submitted = false;
  showForm:boolean=true;
  otp:any

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private data: DataService,
    private mail:MailService
  ) {}

  ngOnInit() {
    this.form1 = this.formBuilder.group(
      {
        mobileNumber: [
          '',
          [
            Validators.required,
            Validators.pattern('^((//+91-?)|0)?[0-9]{10}$'),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        pancard:['',Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  onOtpChange(otp:any){
    this.otp=otp
  }

  verifyOTP(){
    const otp=parseInt(this.otp)
    if(otp===this.data.EmailOTP){
      console.log("same")
      this.router.navigate(['/personalLoan/personalizeYourLoan'])
    }else{
      console.log("diff")
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form1.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form1.invalid) {
      return;
    }else{
      this.showForm=false
      this.mail.sendOTPMail(this.form1.value.email).subscribe((res:any)=>{
        this.data.EmailOTP=res;
      })
    }
    console.log(JSON.stringify(this.form1.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form1.reset();
  }
}
