import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngWordComponent } from './eng-word.component';

describe('EngWordComponent', () => {
  let component: EngWordComponent;
  let fixture: ComponentFixture<EngWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
