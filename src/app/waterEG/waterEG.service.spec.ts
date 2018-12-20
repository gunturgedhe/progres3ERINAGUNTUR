/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WaterEGService } from './waterEG.service';

describe('Service: WaterEG', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaterEGService]
    });
  });

  it('should ...', inject([WaterEGService], (service: WaterEGService) => {
    expect(service).toBeTruthy();
  }));
});
