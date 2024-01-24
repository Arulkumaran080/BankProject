import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLoanApplication3Component } from './personal-loan-application3.component';

describe('PersonalLoanApplication3Component', () => {
  let component: PersonalLoanApplication3Component;
  let fixture: ComponentFixture<PersonalLoanApplication3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalLoanApplication3Component]
    });
    fixture = TestBed.createComponent(PersonalLoanApplication3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
