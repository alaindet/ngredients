import { TestBed } from '@angular/core/testing';

import { NgredientsService } from './ngredients.service';

describe('NgredientsService', () => {
  let service: NgredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
