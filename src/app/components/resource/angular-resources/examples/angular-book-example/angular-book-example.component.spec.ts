import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBookExampleComponent } from './angular-book-example.component';

describe('AngularBookExampleComponent', () => {
  let component: AngularBookExampleComponent;
  let fixture: ComponentFixture<AngularBookExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularBookExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBookExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
