import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponent } from './update.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule,ReactiveFormsModule
      ],
      declarations: [ UpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should render title in a h2 tag`, () => {
    const appDe: DebugElement = fixture.debugElement;
    const h1De = appDe.query(By.css('h2'));
    const h1: HTMLElement = h1De.nativeElement;
    expect(h1.textContent).toEqual('Update Product');
  });
  it('should contain "Product Name:"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[0];
    expect(heading.textContent).toContain('Product Name:');
  });
  it('should contain "Description:"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[1];
    expect(heading.textContent).toContain('Description:');
  });
  it('should contain "Manufacturer:"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[2];
    expect(heading.textContent).toContain('Manufacturer:');
  });
  it('should contain "Quantity:"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[3];
    expect(heading.textContent).toContain('Quantity:');
  });
  it('should contain "Price:"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[4];
    expect(heading.textContent).toContain('Price:');
  });
  it('should contain "Mobile Number:"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[5];
    expect(heading.textContent).toContain('Mobile Number:');
  });
  it('should contain "Image:"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('label')[6];
    expect(heading.textContent).toContain('Image:');
  });
  it('should contain "Update"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('button')[0];
    expect(heading.textContent).toContain('Update');
  });
  it('should contain "Back"', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelectorAll('button')[1];
    expect(heading.textContent).toContain('Back');
  });
});
