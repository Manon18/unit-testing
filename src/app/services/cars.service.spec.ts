import {async, TestBed} from '@angular/core/testing';

import { CarsService } from './cars.service';

describe('CarsService', () => {
  let service: CarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have 74 cars', async (() => {
    expect(service.cars.length).toEqual(74);
  }))
});
