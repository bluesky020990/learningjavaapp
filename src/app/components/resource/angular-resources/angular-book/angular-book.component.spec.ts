import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBookComponent } from './angular-book.component';

describe('AngularBookComponent', () => {
  let component: AngularBookComponent;
  let fixture: ComponentFixture<AngularBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
