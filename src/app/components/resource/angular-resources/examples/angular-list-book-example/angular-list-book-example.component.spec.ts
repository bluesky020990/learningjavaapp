import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularListBookExampleComponent } from './angular-list-book-example.component';

describe('AngularListBookExampleComponent', () => {
  let component: AngularListBookExampleComponent;
  let fixture: ComponentFixture<AngularListBookExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularListBookExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularListBookExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
