import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDataArchitectureComponent } from './angular-data-architecture.component';

describe('AngularDataArchitectureComponent', () => {
  let component: AngularDataArchitectureComponent;
  let fixture: ComponentFixture<AngularDataArchitectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDataArchitectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDataArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
