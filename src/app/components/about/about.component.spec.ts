import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [AboutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* Component testing*/
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have "users" populated ', () => {
    component.ngOnInit();
    expect(component.users).toBeDefined();
  });
  it('should call getRegisteredUsers() of AccountService on component Init', () => {
    spyOn(component.accountService, 'getRegisteredUsers').and.callThrough();
    component.ngOnInit();
    expect(component.accountService.getRegisteredUsers).toHaveBeenCalled();
  });

  /*Dom Testing*/
  it('should contain "E-commerce shopping cart"', () => {
    const heading: HTMLElement = fixture.nativeElement;
    expect(heading.textContent).toContain('E-commerce shopping cart');
  });
  it('should contain "Login to view your cart"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('p')[1];
    expect(heading.textContent).toEqual('Login to view your cart');
  });
  it('should contain "New users? Please register !"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('p')[2];
    expect(heading.textContent).toEqual('New users? Please register !');
  });
 

});
