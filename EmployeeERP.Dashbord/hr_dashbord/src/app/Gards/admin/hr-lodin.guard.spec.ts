import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { hrLodinGuard } from './hr-lodin.guard';

describe('hrLodinGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hrLodinGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
