import {Injectable} from '@angular/core';
import {DICTIONARY} from './data-model/MyDictionary';

@Injectable({
  providedIn: 'root'
})
export class EnglishDictionaryService {

  constructor() {

  }

  getWord(word: string) {
    return DICTIONARY.get(word.toLowerCase());
  }
}
