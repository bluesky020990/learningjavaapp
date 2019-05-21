import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoaderComponent } from './lazy-loader.component';

describe('LazyLoaderComponent', () => {
  let component: LazyLoaderComponent;
  let fixture: ComponentFixture<LazyLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
