import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringMVCComponent } from './spring-mvc.component';

describe('SpringMVCComponent', () => {
  let component: SpringMVCComponent;
  let fixture: ComponentFixture<SpringMVCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringMVCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringMVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
