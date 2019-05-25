import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandPatternComponent } from './command-pattern.component';

describe('CommandPatternComponent', () => {
  let component: CommandPatternComponent;
  let fixture: ComponentFixture<CommandPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
