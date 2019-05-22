import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTestingComponent } from './angular-testing.component';

describe('AngularTestingComponent', () => {
  let component: AngularTestingComponent;
  let fixture: ComponentFixture<AngularTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
