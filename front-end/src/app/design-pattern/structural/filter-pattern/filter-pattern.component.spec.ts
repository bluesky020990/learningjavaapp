import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPatternComponent } from './filter-pattern.component';

describe('FilterPatternComponent', () => {
  let component: FilterPatternComponent;
  let fixture: ComponentFixture<FilterPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
