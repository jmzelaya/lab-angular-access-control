import { TestBed, inject } from '@angular/core/testing';

import { AccesslogService } from './accesslog.service';

describe('AccesslogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccesslogService]
    });
  });

  it('should be created', inject([AccesslogService], (service: AccesslogService) => {
    expect(service).toBeTruthy();
  }));
});
