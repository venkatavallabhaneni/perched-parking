import { TestBed } from '@angular/core/testing';

import { ParkingspotbookingService } from './parkingspotbooking.service';

describe('ParkingspotbookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParkingspotbookingService = TestBed.get(ParkingspotbookingService);
    expect(service).toBeTruthy();
  });
});
