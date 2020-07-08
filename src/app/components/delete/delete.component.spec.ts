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

  // it('should have a title in header h1', () => {
  //   fixture.detectChanges();
  //   const btn = fixture.debugElement.nativeElement.querySelector('h1');
  //   expect(btn.innerHTML).toBe('Delete Product');
  // });
});
