import {Component, Input, OnInit} from '@angular/core';
import {DictionaryWord} from '../../../data-model/dictionary';
import {EnglishDictionaryService} from '../../../english-dictionary.service';

@Component({
  selector: 'app-eng-word',
  templateUrl: './eng-word.component.html',
  styleUrls: ['./eng-word.component.scss']
})
export class EngWordComponent implements OnInit {
  @Input() word: string;

  englishWord: DictionaryWord = null;

  constructor(private englishDictionary: EnglishDictionaryService) { }

  ngOnInit() {
    this.englishWord = this.englishDictionary.getWord(this.word);
  }

}
