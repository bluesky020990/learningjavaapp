import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCompComponent } from './angular-comp.component';

describe('AngularCompComponent', () => {
  let component: AngularCompComponent;
  let fixture: ComponentFixture<AngularCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
