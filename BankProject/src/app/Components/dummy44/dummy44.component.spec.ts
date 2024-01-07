import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dummy44Component } from './dummy44.component';

describe('Dummy44Component', () => {
  let component: Dummy44Component;
  let fixture: ComponentFixture<Dummy44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dummy44Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dummy44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
