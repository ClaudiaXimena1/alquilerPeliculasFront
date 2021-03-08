import { TestBed } from '@angular/core/testing';

import { CrearPeliculaService } from './crear-pelicula.service';

describe('CrearPeliculaService', () => {
  let service: CrearPeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearPeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
