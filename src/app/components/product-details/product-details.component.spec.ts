import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule, MatCardModule
      ],
      declarations: [ProductDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain heading "Product Details"', () => {
    const heading = fixture.debugElement.nativeElement.querySelector('h4');
    expect(heading.innerHTML).toBe('Product Details');
  });
  it('should contain "Buy" button', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('button')[0];
    expect(heading.textContent).toContain('Buy');
  });
  it('should contain "Back" button', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('button')[1];
    expect(heading.textContent).toContain('Back');
  });
});
