import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelAndViewPatternComponent } from './model-and-view-pattern.component';

describe('ModelAndViewPatternComponent', () => {
  let component: ModelAndViewPatternComponent;
  let fixture: ComponentFixture<ModelAndViewPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelAndViewPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelAndViewPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
