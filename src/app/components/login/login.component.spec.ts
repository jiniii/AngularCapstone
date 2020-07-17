import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain "Login"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelector('h4');
    expect(heading.textContent).toContain('Login');
  });
  it('should contain "Email"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[0];
    expect(heading.textContent).toContain('Email');
  });
  it('should contain "Password"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[1];
    expect(heading.textContent).toContain('Password');
  });
  it('should contain "Login" button', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('button')[0];
    expect(heading.textContent).toContain('Login');
  });
  it('should contain "Register" anchor tag', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelector('a');
    expect(heading.textContent).toContain('Register');
  });
});
