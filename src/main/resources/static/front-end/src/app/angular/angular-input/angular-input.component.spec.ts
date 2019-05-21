import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInputComponent } from './angular-input.component';

describe('AngularInputComponent', () => {
  let component: AngularInputComponent;
  let fixture: ComponentFixture<AngularInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
