import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JVMArchitectureComponent } from './jvmarchitecture.component';

describe('JVMArchitectureComponent', () => {
  let component: JVMArchitectureComponent;
  let fixture: ComponentFixture<JVMArchitectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JVMArchitectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JVMArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
