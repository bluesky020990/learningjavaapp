import {DictionaryWord} from './dictionary';


const DICTIONARY = new Map();
DICTIONARY.set('he', new DictionaryWord('he', 'hi:', 'n', 'Anh ấy'));
DICTIONARY.set('she', new DictionaryWord('she', 'ʃiː', 'n', 'Cô ấy'));
DICTIONARY.set('like', new DictionaryWord('like', 'laikː', 'v', ''));
DICTIONARY.set('likes', new DictionaryWord('likes', 'laikːs', 'v', ''));
DICTIONARY.set('fruit', new DictionaryWord('fruit', 'fru:t', 'n', ''));

export { DICTIONARY };
