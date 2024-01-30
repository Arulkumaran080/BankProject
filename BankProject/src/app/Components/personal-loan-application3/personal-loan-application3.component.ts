import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { MailService } from 'src/app/Services/mail.service';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-personal-loan-application3',
  templateUrl: './personal-loan-application3.component.html',
  styleUrls: ['./personal-loan-application3.component.css']
})
export class PersonalLoanApplication3Component {
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
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form1.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form1.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form1.value, null, 2));
  }
}
