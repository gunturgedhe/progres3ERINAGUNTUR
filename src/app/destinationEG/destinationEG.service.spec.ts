/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DestinationEGService } from './destinationEG.service';

describe('Service: DestinationEG', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DestinationEGService]
    });
  });

  it('should ...', inject([DestinationEGService], (service: DestinationEGService) => {
    expect(service).toBeTruthy();
  }));
});
