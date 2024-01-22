import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLoanApplication2Component } from './personal-loan-application2.component';

describe('PersonalLoanApplication2Component', () => {
  let component: PersonalLoanApplication2Component;
  let fixture: ComponentFixture<PersonalLoanApplication2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalLoanApplication2Component]
    });
    fixture = TestBed.createComponent(PersonalLoanApplication2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
