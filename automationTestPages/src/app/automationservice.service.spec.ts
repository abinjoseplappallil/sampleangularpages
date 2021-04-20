import { TestBed } from '@angular/core/testing';

import { AutomationserviceService } from './automationservice.service';

describe('AutomationserviceService', () => {
  let service: AutomationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutomationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
