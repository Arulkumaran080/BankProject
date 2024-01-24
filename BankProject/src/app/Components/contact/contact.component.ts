import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  modelForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private data: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.modelForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      queries: ['', Validators.required],
    });
  }

  Submitform() {
    if (this.modelForm.invalid) {
      alert('All fields are required');
      return;
    }

    const formData = {
      name: this.modelForm.controls['name'].value,
      email: this.modelForm.controls['email'].value,
      queries: this.modelForm.controls['queries'].value,
    };

    // Make a POST request to Formspree
    this.http.post('https://formspree.io/f/mpzvwvnw', formData).subscribe(
      (response) => {
        alert('Successfully submitted');

        // Reset the form after a successful submission
        setTimeout(() => {
          this.modelForm.reset();
        }, 2000);
      },
      (error) => {
        console.error('Error submitting form:', error);
        alert('Email required to be in the correct format. Please try again.');
      }
    );
  }
}
