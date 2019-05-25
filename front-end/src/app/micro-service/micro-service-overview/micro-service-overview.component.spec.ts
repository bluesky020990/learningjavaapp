import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroServiceOverviewComponent } from './micro-service-overview.component';

describe('MicroServiceOverviewComponent', () => {
  let component: MicroServiceOverviewComponent;
  let fixture: ComponentFixture<MicroServiceOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroServiceOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroServiceOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
