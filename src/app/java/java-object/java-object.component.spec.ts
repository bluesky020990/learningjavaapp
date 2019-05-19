import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaObjectComponent } from './java-object.component';

describe('JavaObjectComponent', () => {
  let component: JavaObjectComponent;
  let fixture: ComponentFixture<JavaObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
