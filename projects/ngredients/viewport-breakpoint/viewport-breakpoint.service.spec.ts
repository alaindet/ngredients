import { TestBed } from '@angular/core/testing';

import { NgredientsViewportBreakpointService } from './viewport-breakpoint.service';

describe('NgredientsViewportBreakpointService', () => {
  let service: NgredientsViewportBreakpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgredientsViewportBreakpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
