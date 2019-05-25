import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategiesPatternComponent } from './strategies-pattern.component';

describe('StrategiesPatternComponent', () => {
  let component: StrategiesPatternComponent;
  let fixture: ComponentFixture<StrategiesPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategiesPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategiesPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
