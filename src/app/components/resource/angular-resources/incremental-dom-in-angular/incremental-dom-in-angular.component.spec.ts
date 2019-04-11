import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalDomInAngularComponent } from './incremental-dom-in-angular.component';

describe('IncrementalDomInAngularComponent', () => {
  let component: IncrementalDomInAngularComponent;
  let fixture: ComponentFixture<IncrementalDomInAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementalDomInAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementalDomInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
