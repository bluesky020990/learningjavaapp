import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaClassComponent } from './java-class.component';

describe('JavaClassComponent', () => {
  let component: JavaClassComponent;
  let fixture: ComponentFixture<JavaClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
