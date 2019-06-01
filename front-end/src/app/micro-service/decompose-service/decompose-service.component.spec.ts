import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecomposeServiceComponent } from './decompose-service.component';

describe('DecomposeServiceComponent', () => {
  let component: DecomposeServiceComponent;
  let fixture: ComponentFixture<DecomposeServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecomposeServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecomposeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
