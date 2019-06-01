import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectPoolPatternComponent } from './object-pool-pattern.component';

describe('ObjectPoolPatternComponent', () => {
  let component: ObjectPoolPatternComponent;
  let fixture: ComponentFixture<ObjectPoolPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectPoolPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectPoolPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
