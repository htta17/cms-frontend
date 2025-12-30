import { TestBed } from '@angular/core/testing';

import { Layoutservice } from './layoutservice';

describe('Layoutservice', () => {
  let service: Layoutservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Layoutservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
