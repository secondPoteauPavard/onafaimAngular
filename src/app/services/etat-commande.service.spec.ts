import { TestBed } from '@angular/core/testing';

import { EtatCommandeService } from './etat-commande.service';

describe('EtatCommandeService', () => {
  let service: EtatCommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtatCommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
