import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringJDBCComponent } from './spring-jdbc.component';

describe('SpringJDBCComponent', () => {
  let component: SpringJDBCComponent;
  let fixture: ComponentFixture<SpringJDBCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringJDBCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringJDBCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
