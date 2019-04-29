import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngOverviewComponent } from './eng-overview.component';

describe('EngOverviewComponent', () => {
  let component: EngOverviewComponent;
  let fixture: ComponentFixture<EngOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
