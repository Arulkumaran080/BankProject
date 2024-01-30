import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { MailService } from 'src/app/Services/mail.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-personal-loan-application2',
  templateUrl: './personal-loan-application2.component.html',
  styleUrls: ['./personal-loan-application2.component.css']
})
export class PersonalLoanApplication2Component {
  form1!: FormGroup;
  submitted = false;
  showForm:boolean=true;
  otp:any
   // City Names
   City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']
  
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
        salary:['',Validators.required],
        organization: ['',Validators.required],
        salarySlip:['',Validators.required],
        resident:['',Validators.required],
      }
    );
  }

  sample(a:any){
    this.form1.value.salary=a;
    console.log(a)
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
