import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLoanApplication4Component } from './personal-loan-application4.component';

describe('PersonalLoanApplication4Component', () => {
  let component: PersonalLoanApplication4Component;
  let fixture: ComponentFixture<PersonalLoanApplication4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalLoanApplication4Component]
    });
    fixture = TestBed.createComponent(PersonalLoanApplication4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
