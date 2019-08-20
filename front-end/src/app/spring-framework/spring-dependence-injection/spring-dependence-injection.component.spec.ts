import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringDependenceInjectionComponent } from './spring-dependence-injection.component';

describe('SpringDependenceInjectionComponent', () => {
  let component: SpringDependenceInjectionComponent;
  let fixture: ComponentFixture<SpringDependenceInjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringDependenceInjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringDependenceInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
