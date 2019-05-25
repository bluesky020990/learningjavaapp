import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePatternComponent } from './template-pattern.component';

describe('TemplatePatternComponent', () => {
  let component: TemplatePatternComponent;
  let fixture: ComponentFixture<TemplatePatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatePatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
