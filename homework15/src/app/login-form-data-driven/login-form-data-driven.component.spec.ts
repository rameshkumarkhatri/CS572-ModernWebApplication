import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormDataDrivenComponent } from './login-form-data-driven.component';

describe('LoginFormDataDrivenComponent', () => {
  let component: LoginFormDataDrivenComponent;
  let fixture: ComponentFixture<LoginFormDataDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormDataDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormDataDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
