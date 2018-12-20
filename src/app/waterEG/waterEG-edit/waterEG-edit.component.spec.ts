/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WaterEGEditComponent } from './waterEG-edit.component';

describe('WaterEGEditComponent', () => {
  let component: WaterEGEditComponent;
  let fixture: ComponentFixture<WaterEGEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterEGEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterEGEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
