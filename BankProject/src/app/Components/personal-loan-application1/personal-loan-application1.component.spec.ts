import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLoanApplication1Component } from './personal-loan-application1.component';

describe('PersonalLoanApplication1Component', () => {
  let component: PersonalLoanApplication1Component;
  let fixture: ComponentFixture<PersonalLoanApplication1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalLoanApplication1Component],
    });
    fixture = TestBed.createComponent(PersonalLoanApplication1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
