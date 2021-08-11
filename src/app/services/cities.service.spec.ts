import { TestBed } from '@angular/core/testing';

import { CitiesService } from './cities.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

describe('CitiesService', () => {
  let service: CitiesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(CitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('throws 404 error', () => {
    service.getCities().subscribe(
      data => fail('Should have failed with 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toContain('404 error');
      }
    );

    const req = httpTestingController.expectOne('https://retoolapi.dev/FUWyt7/data');

    req.flush('404 error', { status: 404, statusText: 'Not Found' });
  });
});
