import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLoanEligibilityComponent } from './personal-loan-eligibility.component';

describe('PersonalLoanEligibilityComponent', () => {
  let component: PersonalLoanEligibilityComponent;
  let fixture: ComponentFixture<PersonalLoanEligibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalLoanEligibilityComponent]
    });
    fixture = TestBed.createComponent(PersonalLoanEligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
