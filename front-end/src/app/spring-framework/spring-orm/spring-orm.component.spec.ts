import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringORMComponent } from './spring-orm.component';

describe('SpringORMComponent', () => {
  let component: SpringORMComponent;
  let fixture: ComponentFixture<SpringORMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringORMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringORMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
