import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapComponentComponent } from './ng-bootstrap-component.component';

describe('NgBootstrapComponentComponent', () => {
  let component: NgBootstrapComponentComponent;
  let fixture: ComponentFixture<NgBootstrapComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
