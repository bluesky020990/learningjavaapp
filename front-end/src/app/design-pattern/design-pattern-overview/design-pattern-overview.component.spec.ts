import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPatternOverviewComponent } from './design-pattern-overview.component';

describe('DesignPatternOverviewComponent', () => {
  let component: DesignPatternOverviewComponent;
  let fixture: ComponentFixture<DesignPatternOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignPatternOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignPatternOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
