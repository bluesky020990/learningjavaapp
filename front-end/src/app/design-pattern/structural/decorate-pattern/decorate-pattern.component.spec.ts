import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratePatternComponent } from './decorate-pattern.component';

describe('DecoratePatternComponent', () => {
  let component: DecoratePatternComponent;
  let fixture: ComponentFixture<DecoratePatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoratePatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratePatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
