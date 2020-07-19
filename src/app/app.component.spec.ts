import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AlertComponent } from './components/login/alert.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule, MatCardModule, AppRoutingModule, FormsModule,
      ],
      declarations: [
        AppComponent, HomeComponent, AlertComponent, AboutComponent, PageNotFoundComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* Component testing*/
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'E-Cart'`, async(() => {
    component.ngOnInit();
    expect(component.title).toEqual('E-Cart');
  }));
});
