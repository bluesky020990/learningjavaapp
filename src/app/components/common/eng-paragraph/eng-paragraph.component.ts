import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-eng-paragraph',
  templateUrl: './eng-paragraph.component.html',
  styleUrls: ['./eng-paragraph.component.scss']
})

export class EngParagraphComponent implements OnInit {
  @Input() paragraph: string;

  listWord: string[];

  constructor() {
  }

  ngOnInit() {
    this.listWord = [];
    if (this.paragraph != null && this.paragraph.trim() !== '') {
      const words: string[] = this.paragraph.split(' ');
      for (const word of words) {
        const wordArr = processPhrase(word);
        this.listWord = this.listWord.concat(wordArr);
      }
    }

    function processPhrase(phrase: string): string[] {
      if (phrase.indexOf(',') > -1) {
        return processTheArray(phrase, ',');

      } else if (phrase.indexOf('.') > -1) {
        return processTheArray(phrase, '.');

      } else if (phrase.indexOf('!') > -1) {
        return processTheArray(phrase, '!');

      } else if (phrase.indexOf(':') > -1) {
        return processTheArray(phrase, ':');

      } else if (phrase.indexOf(';') > -1) {
        return processTheArray(phrase, ';');
      }

      return [phrase];
    }

    function processTheArray(phrase, character): string[] {
      const wordArr = processPhrase(phrase.substr(0, phrase.indexOf(character)));
      return phrase.indexOf(character) === 0 ? [character].concat(wordArr) : wordArr.concat([character]);
    }
  }
}
