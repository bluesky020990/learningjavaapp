import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringNAngularComponent } from './spring-nangular.component';

describe('SpringNAngularComponent', () => {
  let component: SpringNAngularComponent;
  let fixture: ComponentFixture<SpringNAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringNAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringNAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
