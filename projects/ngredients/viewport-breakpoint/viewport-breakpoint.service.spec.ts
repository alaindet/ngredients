import { TestBed } from '@angular/core/testing';

import { NgrViewportBreakpointService } from './viewport-breakpoint.service';

describe('NgrViewportBreakpointService', () => {
  let service: NgrViewportBreakpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgrViewportBreakpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
