import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonMenuComponent } from './lesson-menu.component';

describe('LessonMenuComponent', () => {
  let component: LessonMenuComponent;
  let fixture: ComponentFixture<LessonMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
