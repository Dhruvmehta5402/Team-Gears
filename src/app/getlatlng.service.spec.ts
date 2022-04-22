import { TestBed } from '@angular/core/testing';

import { GetlatlngService } from './getlatlng.service';

describe('GetlatlngService', () => {
  let service: GetlatlngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetlatlngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
