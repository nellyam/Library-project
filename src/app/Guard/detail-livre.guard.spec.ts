import { TestBed } from '@angular/core/testing';

import { DetailLivreGuard } from './detail-livre.guard';

describe('DetailLivreGuard', () => {
  let guard: DetailLivreGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DetailLivreGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
