import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringWebComponent } from './spring-web.component';

describe('SpringWebComponent', () => {
  let component: SpringWebComponent;
  let fixture: ComponentFixture<SpringWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
