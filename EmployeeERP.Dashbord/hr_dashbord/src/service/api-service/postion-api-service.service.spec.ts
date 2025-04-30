import { TestBed } from '@angular/core/testing';

import { PostionApiServiceService } from './postion-api-service.service';

describe('PostionApiServiceService', () => {
  let service: PostionApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostionApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
