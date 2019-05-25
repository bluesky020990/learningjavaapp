import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRPatternComponent } from './co-rpattern.component';

describe('CoRPatternComponent', () => {
  let component: CoRPatternComponent;
  let fixture: ComponentFixture<CoRPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
