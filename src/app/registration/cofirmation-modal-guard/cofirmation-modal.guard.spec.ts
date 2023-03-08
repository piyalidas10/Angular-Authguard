import { TestBed } from '@angular/core/testing';

import { ConfirmationModalGuard } from './cofirmation-modal.guard';

describe('ConfirmationModalGuard', () => {
  let guard: ConfirmationModalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfirmationModalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
