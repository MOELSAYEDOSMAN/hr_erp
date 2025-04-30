import { TestBed } from '@angular/core/testing';

import { ApiBaseServiceService } from './api-base-service.service';

describe('ApiBaseServiceService', () => {
  let service: ApiBaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
