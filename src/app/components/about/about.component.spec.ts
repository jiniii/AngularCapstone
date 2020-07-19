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

  /*Dom Testing*/
  it('should contain "E-commerce shopping cart"', () => {
    const heading: HTMLElement = fixture.nativeElement;
    expect(heading.textContent).toContain('E-commerce shopping cart');
  });
});
