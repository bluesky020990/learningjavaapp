import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NullObjectPatternComponent } from './null-object-pattern.component';

describe('NullObjectPatternComponent', () => {
  let component: NullObjectPatternComponent;
  let fixture: ComponentFixture<NullObjectPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NullObjectPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NullObjectPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
