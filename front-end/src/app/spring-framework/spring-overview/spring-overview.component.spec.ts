import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringOverviewComponent } from './spring-overview.component';

describe('SpringOverviewComponent', () => {
  let component: SpringOverviewComponent;
  let fixture: ComponentFixture<SpringOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
