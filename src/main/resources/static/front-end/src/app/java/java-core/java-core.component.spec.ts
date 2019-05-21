import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaCoreComponent } from './java-core.component';

describe('JavaCoreComponent', () => {
  let component: JavaCoreComponent;
  let fixture: ComponentFixture<JavaCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
