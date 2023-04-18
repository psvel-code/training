import { TestBed } from '@angular/core/testing';

import { CanDeactiveGuardGuard } from './can-deactive-guard.guard';

describe('CanDeactiveGuardGuard', () => {
  let guard: CanDeactiveGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactiveGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
