import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from 'src/app/filter.pipe';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsComponent } from './products.component';
import { ChartComponent } from '../chart/chart.component';
import { ChartsModule } from 'ng2-charts';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule, FormsModule, NgxPaginationModule,ChartsModule
      ],
      declarations: [ProductsComponent, FilterPipe, ProductItemComponent,ChartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain "Mobile Products', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelector('h3');
    expect(heading.textContent).toContain('Mobile Products');
  });
});
