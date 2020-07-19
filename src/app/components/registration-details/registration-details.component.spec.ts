import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDetailsComponent } from './registration-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegistrationDetailsComponent', () => {
  let component: RegistrationDetailsComponent;
  let fixture: ComponentFixture<RegistrationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [RegistrationDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain "Login to view your cart"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('p')[0];
    expect(heading.textContent).toEqual('Login to view your cart');
  });
  it('should contain "New users? Please register !"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('p')[1];
    expect(heading.textContent).toEqual('New users? Please register !');
  });
});
