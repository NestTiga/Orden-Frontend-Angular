/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrdenService } from './orden.service';

describe('Service: Orden', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdenService]
    });
  });

  it('should ...', inject([OrdenService], (service: OrdenService) => {
    expect(service).toBeTruthy();
  }));
});
