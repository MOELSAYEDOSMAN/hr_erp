import { TestBed } from '@angular/core/testing';

import { PostionApiService } from './postion-api.service';

describe('PostionApiService', () => {
  let service: PostionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
