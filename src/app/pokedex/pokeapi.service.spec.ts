import { TestBed, inject } from '@angular/core/testing';
import { PokeapiService } from './pokeapi.service';

describe('PokeapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokeapiService]
    });
  });

  it('should ...', inject([PokeapiService], (service: PokeapiService) => {
    expect(service).toBeTruthy();
  }));
});
