import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLoanHomeComponent } from './personal-loan-home.component';

describe('PersonalLoanHomeComponent', () => {
  let component: PersonalLoanHomeComponent;
  let fixture: ComponentFixture<PersonalLoanHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalLoanHomeComponent]
    });
    fixture = TestBed.createComponent(PersonalLoanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
