import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule, MatCardModule,ReactiveFormsModule
      ],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain "Register"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelector('h4');
    expect(heading.textContent).toContain('Register');
  });
  it('should contain "First Name"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[0];
    expect(heading.textContent).toContain('First Name');
  });
  it('should contain "Last Name"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[1];
    expect(heading.textContent).toContain('Last Name');
  });
  it('should contain "Email Id"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[2];
    expect(heading.textContent).toContain('Email Id');
  });
  it('should contain "Password"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[3];
    expect(heading.textContent).toContain('Password');
  });
  it('should contain "Location"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[4];
    expect(heading.textContent).toContain('Location');
  });
  it('should contain "Mobile Number"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[5];
    expect(heading.textContent).toContain('Mobile Number');
  });
  it('should contain "Register" button', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('button')[0];
    expect(heading.textContent).toContain('Register');
  });
  it('should contain "Cancel" anchor tag', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelector('a');
    expect(heading.textContent).toContain('Cancel');
  });
});
