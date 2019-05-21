import { TestBed } from '@angular/core/testing';

import { EnglishDictionaryService } from './english-dictionary.service';

describe('EnglishDictionaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnglishDictionaryService = TestBed.get(EnglishDictionaryService);
    expect(service).toBeTruthy();
  });
});
