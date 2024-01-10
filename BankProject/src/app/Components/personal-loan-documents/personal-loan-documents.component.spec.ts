import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLoanDocumentsComponent } from './personal-loan-documents.component';

describe('PersonalLoanDocumentsComponent', () => {
  let component: PersonalLoanDocumentsComponent;
  let fixture: ComponentFixture<PersonalLoanDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalLoanDocumentsComponent]
    });
    fixture = TestBed.createComponent(PersonalLoanDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
