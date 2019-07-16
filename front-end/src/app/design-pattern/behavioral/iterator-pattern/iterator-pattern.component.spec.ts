import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IteratorPatternComponent } from './iterator-pattern.component';

describe('IteratorPatternComponent', () => {
  let component: IteratorPatternComponent;
  let fixture: ComponentFixture<IteratorPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteratorPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IteratorPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
