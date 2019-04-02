import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBoostrapComponent } from './angular-boostrap.component';

describe('AngularBoostrapComponent', () => {
  let component: AngularBoostrapComponent;
  let fixture: ComponentFixture<AngularBoostrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularBoostrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBoostrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
