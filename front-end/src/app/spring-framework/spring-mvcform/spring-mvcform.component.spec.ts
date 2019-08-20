import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringMVCFormComponent } from './spring-mvcform.component';

describe('SpringMVCFormComponent', () => {
  let component: SpringMVCFormComponent;
  let fixture: ComponentFixture<SpringMVCFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringMVCFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringMVCFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
