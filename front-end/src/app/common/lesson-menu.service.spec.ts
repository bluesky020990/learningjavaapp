import { TestBed } from '@angular/core/testing';

import { LessonMenuService } from './lesson-menu.service';

describe('LessonMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LessonMenuService = TestBed.get(LessonMenuService);
    expect(service).toBeTruthy();
  });
});
