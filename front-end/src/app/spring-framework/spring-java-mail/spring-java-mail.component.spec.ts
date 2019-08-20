import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringJavaMailComponent } from './spring-java-mail.component';

describe('SpringJavaMailComponent', () => {
  let component: SpringJavaMailComponent;
  let fixture: ComponentFixture<SpringJavaMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringJavaMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringJavaMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
