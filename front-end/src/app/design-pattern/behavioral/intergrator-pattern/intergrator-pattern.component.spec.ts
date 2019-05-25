import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntergratorPatternComponent } from './intergrator-pattern.component';

describe('IntergratorPatternComponent', () => {
  let component: IntergratorPatternComponent;
  let fixture: ComponentFixture<IntergratorPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntergratorPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntergratorPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
