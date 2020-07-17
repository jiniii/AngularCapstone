import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,RouterTestingModule],
      declarations: [CartComponent, CartItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain "Shopping Cart"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelector('h2');
    expect(heading.textContent).toContain('Shopping Cart');
  });
  it('should contain "Cart List"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelector('h6');
    expect(heading.textContent).toContain('Cart List');
  });
});
