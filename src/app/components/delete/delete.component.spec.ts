import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComponent } from './delete.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('DeleteComponent', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule,
      ],
      declarations: [ DeleteComponent ]
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

  it('should contain heading "Delete Product"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelector('h4');
    expect(heading.textContent).toContain('Delete Product');
  });
});
