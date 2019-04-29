import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngResourceComponent } from './eng-resource.component';

describe('EngResourceComponent', () => {
  let component: EngResourceComponent;
  let fixture: ComponentFixture<EngResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
