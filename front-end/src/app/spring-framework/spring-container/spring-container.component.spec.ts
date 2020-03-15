import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringContainerComponent } from './spring-container.component';

describe('SpringContainerComponent', () => {
  let component: SpringContainerComponent;
  let fixture: ComponentFixture<SpringContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
