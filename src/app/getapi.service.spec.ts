import { TestBed } from '@angular/core/testing';

import { GetapiService } from './getapi.service';

describe('GetapiService', () => {
  let service: GetapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
