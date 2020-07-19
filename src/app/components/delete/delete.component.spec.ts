import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComponent } from './delete.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeleteComponent', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule,
      ],
      declarations: [DeleteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getDetails() of ProductService on component Init', () => {
    spyOn(component.proService, 'getProduct').and.callThrough();
    component.ngOnInit();
    expect(component.proService.getProduct).toHaveBeenCalled();
  });

  it('should contain heading "Delete Product"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelector('h4');
    expect(heading.textContent).toContain('Delete Product');
  });
  it('should contain "Product Name: "', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[0];
    expect(heading.textContent).toContain('Product Name: ');
  });
  it('should contain "Product Description: "', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[1];
    expect(heading.textContent).toContain('Product Description: ');
  });
  it('should contain "Product Manufacturer: "', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[2];
    expect(heading.textContent).toContain('Product Manufacturer: ');
  });
  it('should contain "Product Quantity: "', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[3];
    expect(heading.textContent).toContain('Product Quantity: ');
  });
  it('should contain "Product Price: "', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[4];
    expect(heading.textContent).toContain('Product Price: ');
  });
  it('should contain "Delete"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('button')[0];
    expect(heading.textContent).toContain('Delete');
  });
  it('should contain "Back"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('button')[1];
    expect(heading.textContent).toContain('Back');
  });
});
