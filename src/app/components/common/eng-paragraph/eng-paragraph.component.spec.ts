import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngParagraphComponent } from './eng-paragraph.component';

describe('EngParagraphComponent', () => {
  let component: EngParagraphComponent;
  let fixture: ComponentFixture<EngParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
