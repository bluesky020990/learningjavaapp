import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDefaultComponent } from './manager-default.component';

describe('ManagerDefaultComponent', () => {
  let component: ManagerDefaultComponent;
  let fixture: ComponentFixture<ManagerDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
