import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-loan-documents',
  templateUrl: './personal-loan-documents.component.html',
  styleUrls: ['./personal-loan-documents.component.css']
})
export class PersonalLoanDocumentsComponent {
  selectedTab: 'salaried' | 'selfEmployed' = 'salaried';
  constructor(private router: Router) {}

  showSalaried() {
    this.selectedTab = 'salaried';
  }

  showSelfEmployed() {
    this.selectedTab = 'selfEmployed';
  }
  onImageClick() {
    
    this.router.navigate(['/personal-loan']);
  }
}
