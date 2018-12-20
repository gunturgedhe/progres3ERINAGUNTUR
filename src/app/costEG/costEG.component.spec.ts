/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CostEGComponent } from './costEG.component';

describe('CostEGComponent', () => {
  let component: CostEGComponent;
  let fixture: ComponentFixture<CostEGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostEGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostEGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
