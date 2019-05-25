import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroServiceComponent } from './micro-service.component';

describe('MicroServiceComponent', () => {
  let component: MicroServiceComponent;
  let fixture: ComponentFixture<MicroServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
