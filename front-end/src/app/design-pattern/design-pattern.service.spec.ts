import { TestBed } from '@angular/core/testing';

import { DesignPatternService } from './design-pattern.service';

describe('DesignPatternService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignPatternService = TestBed.get(DesignPatternService);
    expect(service).toBeTruthy();
  });
});
