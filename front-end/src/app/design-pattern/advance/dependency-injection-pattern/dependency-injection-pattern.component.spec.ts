import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionPatternComponent } from './dependency-injection-pattern.component';

describe('DependencyInjectionPatternComponent', () => {
  let component: DependencyInjectionPatternComponent;
  let fixture: ComponentFixture<DependencyInjectionPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyInjectionPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyInjectionPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
