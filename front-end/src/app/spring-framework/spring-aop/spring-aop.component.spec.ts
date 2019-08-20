import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringAOPComponent } from './spring-aop.component';

describe('SpringAOPComponent', () => {
  let component: SpringAOPComponent;
  let fixture: ComponentFixture<SpringAOPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringAOPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringAOPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
