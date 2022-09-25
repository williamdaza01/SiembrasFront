import { TestBed } from '@angular/core/testing';

import { ServicioDbpyService } from './servicio-dbpy.service';

describe('ServicioDbpyService', () => {
  let service: ServicioDbpyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDbpyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
