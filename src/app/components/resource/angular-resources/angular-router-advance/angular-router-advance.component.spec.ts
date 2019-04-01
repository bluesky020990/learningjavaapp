import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRouterAdvanceComponent } from './angular-router-advance.component';

describe('AngularRouterAdvanceComponent', () => {
  let component: AngularRouterAdvanceComponent;
  let fixture: ComponentFixture<AngularRouterAdvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularRouterAdvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRouterAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
