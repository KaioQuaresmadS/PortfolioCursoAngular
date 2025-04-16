import { TestBed } from '@angular/core/testing';

import { EmpregadorService } from './empregador.service';

describe('EmpregadorService', () => {
  let service: EmpregadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpregadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
