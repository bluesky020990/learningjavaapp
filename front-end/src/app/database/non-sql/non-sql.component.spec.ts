import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonSQLComponent } from './non-sql.component';

describe('NonSQLComponent', () => {
  let component: NonSQLComponent;
  let fixture: ComponentFixture<NonSQLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonSQLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonSQLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
