import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngVocabularyWorkshopComponent } from './eng-vocabulary-workshop.component';

describe('EngVocabularyWorkshopComponent', () => {
  let component: EngVocabularyWorkshopComponent;
  let fixture: ComponentFixture<EngVocabularyWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngVocabularyWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngVocabularyWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
