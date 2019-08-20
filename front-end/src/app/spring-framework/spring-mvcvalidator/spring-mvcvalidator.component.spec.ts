import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringMVCValidatorComponent } from './spring-mvcvalidator.component';

describe('SpringMVCValidatorComponent', () => {
  let component: SpringMVCValidatorComponent;
  let fixture: ComponentFixture<SpringMVCValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringMVCValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringMVCValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
