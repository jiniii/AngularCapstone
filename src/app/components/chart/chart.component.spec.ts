import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponent } from './chart.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChartsModule, HttpClientModule],
      declarations: [ChartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
