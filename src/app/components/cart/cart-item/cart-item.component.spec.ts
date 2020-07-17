import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemComponent } from './cart-item.component';
import { HttpClientModule } from '@angular/common/http';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CartItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain "Remove"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('button')[0];
    expect(heading.textContent).toContain('Remove');
  });
});
