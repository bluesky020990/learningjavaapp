import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringMVCApplicationComponent } from './spring-mvcapplication.component';

describe('SpringMVCApplicationComponent', () => {
  let component: SpringMVCApplicationComponent;
  let fixture: ComponentFixture<SpringMVCApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringMVCApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringMVCApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
