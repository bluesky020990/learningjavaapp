import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringRemotingComponent } from './spring-remoting.component';

describe('SpringRemotingComponent', () => {
  let component: SpringRemotingComponent;
  let fixture: ComponentFixture<SpringRemotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringRemotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringRemotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
