/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NatureEGComponent } from './natureEG.component';

describe('NatureEGComponent', () => {
  let component: NatureEGComponent;
  let fixture: ComponentFixture<NatureEGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatureEGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureEGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
