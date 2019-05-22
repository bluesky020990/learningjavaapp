import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringFrameworkComponent } from './spring-framework.component';

describe('SpringFrameworkComponent', () => {
  let component: SpringFrameworkComponent;
  let fixture: ComponentFixture<SpringFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
