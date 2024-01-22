import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import Validation from 'src/app/Models/validation';
import { DataService } from 'src/app/Services/data.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-personal-loan-application1',
  templateUrl: './personal-loan-application1.component.html',
  styleUrls: ['./personal-loan-application1.component.css'],
})
export class PersonalLoanApplication1Component implements OnInit {
  form1!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private data: DataService
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

  onReset(): void {
    this.submitted = false;
    this.form1.reset();
  }
}
