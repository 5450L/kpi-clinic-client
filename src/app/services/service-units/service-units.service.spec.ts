import { TestBed } from '@angular/core/testing';

import { ServiceUnitsService } from './service-units.service';

describe('ServiceUnitsService', () => {
  let service: ServiceUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
