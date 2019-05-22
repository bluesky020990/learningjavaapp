import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngPronunciationComponent } from './eng-pronunciation.component';

describe('EngPronunciationComponent', () => {
  let component: EngPronunciationComponent;
  let fixture: ComponentFixture<EngPronunciationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngPronunciationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngPronunciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
