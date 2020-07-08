import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AlertComponent } from './components/login/alert.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

  describe('AppComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule, HttpClientTestingModule, MatCardModule,AppRoutingModule,FormsModule,
        ],
        declarations: [
          AppComponent, HomeComponent, AboutComponent, AlertComponent,
        ],
      }).compileComponents();
    }));

    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });
 
    it(`should have as title 'E-Cart'`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('E-Cart');
    }));
  });
