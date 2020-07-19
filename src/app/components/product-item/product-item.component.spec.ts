import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from 'src/app/filter.pipe';
import { ProductItemComponent } from './product-item.component';


describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule, RouterModule, FormsModule, NgxPaginationModule
      ],
      declarations: [ProductItemComponent, FilterPipe],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain "View Cart" button', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('button')[0];
    expect(heading.textContent).toContain('View Cart');
  });
  it('should contain "Add New Product" button', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('button')[1];
    expect(heading.textContent).toContain('Add New Product');
  });
  
});
