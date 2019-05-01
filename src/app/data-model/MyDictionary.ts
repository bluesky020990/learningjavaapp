import {DictionaryWord} from './dictionary';

const LIST_WORD = [
  'i:', 'ɪ', 'u:', 'ʊ', 'e', 'æ', 'ɑ:', 'ᴧ', 'ᴐ:', 'ɒ', 'ɜ:', 'ǝ',
  'ıǝ', 'ʊǝ', 'eǝ', 'eı', 'ᴐı', 'aı', 'ǝʊ', 'aʊ',
  'p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z',
  'θ', 'ð', 'ʃ', 'ȝ', 'tʃ', 'dȝ',
  'm', 'n', 'ƞ', 'h', 'j', 'l', 'w', 'r'

];

const DICTIONARY = new Map();
DICTIONARY.set('a', new DictionaryWord('a', 'ǝ', '', ''));
DICTIONARY.set('an', new DictionaryWord('an', 'ən', '', ''));
DICTIONARY.set('i', new DictionaryWord('i', 'ai', 'n', 'Anh ấy'));
DICTIONARY.set('he', new DictionaryWord('he', 'hi:', 'n', 'Anh ấy'));
DICTIONARY.set('he', new DictionaryWord('he', 'hi:', 'n', 'Anh ấy'));
DICTIONARY.set('she', new DictionaryWord('she', 'ʃiː', 'n', 'Cô ấy'));
DICTIONARY.set('like', new DictionaryWord('like', 'laikː', 'v', ''));
DICTIONARY.set('likes', new DictionaryWord('likes', 'laikːs', 'v', ''));
DICTIONARY.set('fruit', new DictionaryWord('fruit', 'fru:t', 'n', ''));
DICTIONARY.set('popcorn', new DictionaryWord('popcorn', 'pɒp.kᴐ:n', 'n', ''));
DICTIONARY.set('joyful', new DictionaryWord('joyful', 'dȝᴐı.fl', 'n', ''));
DICTIONARY.set('angry', new DictionaryWord('angry', 'æƞgri', 'n', ''));
DICTIONARY.set('scared', new DictionaryWord('scared', 'skeəd', 'n', ''));
DICTIONARY.set('grandchild', new DictionaryWord('grandchild', 'grænd.tʃaıld', 'n', ''));
DICTIONARY.set('grandma', new DictionaryWord('grandma', 'grænd.mǝ', '', ''));

DICTIONARY.set('excited', new DictionaryWord('excited', 'ɪk.saı.tɪd', '', ''));
DICTIONARY.set('calm', new DictionaryWord('calm', 'ka:m', '', ''));
DICTIONARY.set('woman', new DictionaryWord('woman', 'wʊm.ən', '', ''));
DICTIONARY.set('seller', new DictionaryWord('seller', 'sǝlǝr', '', ''));
DICTIONARY.set('today', new DictionaryWord('today', 'tǝdei', '', ''));
DICTIONARY.set('met', new DictionaryWord('met', 'met', '', ''));
DICTIONARY.set('many', new DictionaryWord('many', 'meni', '', ''));
DICTIONARY.set('people', new DictionaryWord('people', 'pi:pl', '', ''));
DICTIONARY.set('first', new DictionaryWord('first', 'fɜ:st', '', ''));
DICTIONARY.set('said', new DictionaryWord('said', 'sed', '', ''));
DICTIONARY.set('points', new DictionaryWord('points', 'pɔɪnts', '', ''));
DICTIONARY.set('exam', new DictionaryWord('exam', 'ig`zæm', '', ''));


DICTIONARY.set('bought', new DictionaryWord('bought', 'bɔːt', '', ''));
DICTIONARY.set('group', new DictionaryWord('group', 'gru:p', '', ''));
DICTIONARY.set('around', new DictionaryWord('around', 'əˈraʊnd', '', ''));
DICTIONARY.set('didn’t ', new DictionaryWord('didn’t ', 'dɪd.ənt', '', ''));
DICTIONARY.set('couple', new DictionaryWord('couple', 'kʌp.əl', '', ''));
DICTIONARY.set('sleepy', new DictionaryWord('sleepy', 'sliː.pi', '', ''));
DICTIONARY.set('finally', new DictionaryWord('finally', 'faɪ.nəl.i', '', ''));
DICTIONARY.set('excited', new DictionaryWord('excited', 'ɪkˈsaɪt', '', ''));

DICTIONARY.set('girl', new DictionaryWord('girl', 'gɜ:l', '', ''));



DICTIONARY.set('watch', new DictionaryWord('watch', 'wɑːtʃ', 'n', ''));
DICTIONARY.set('touch', new DictionaryWord('touch', 'tʌtʃ', 'n', ''));
DICTIONARY.set('dress', new DictionaryWord('dress', 'dres', 'n', ''));
DICTIONARY.set('suits', new DictionaryWord('suits', 'suːts', 'n', ''));
DICTIONARY.set('formal', new DictionaryWord('formal', 'fɔːr.məl', 'n', ''));
DICTIONARY.set('shirt', new DictionaryWord('shirt', 'ʃɝːt', 'n', ''));

DICTIONARY.set('absolutely', new DictionaryWord('absolutely', 'ˌæb.səˈluːt.li', 'n', ''));

DICTIONARY.set('weird', new DictionaryWord('weird', 'wɪəd', 'n', 'Kì dị'));
DICTIONARY.set('instead', new DictionaryWord('instead', 'ɪnˈsted', 'n', ''));

DICTIONARY.set('casual', new DictionaryWord('casual', 'kæʒ.u.əl', 'n', ''));
DICTIONARY.set('tight', new DictionaryWord('tight', 'taɪt', 'n', ''));
DICTIONARY.set('uncomfortable', new DictionaryWord('uncomfortable', 'ʌnˈkʌmf.tə.bəl', 'n', ''));

DICTIONARY.set('short', new DictionaryWord('short', 'ʃɔːt', 'n', ''));
DICTIONARY.set('skirt', new DictionaryWord('skirt', 'skɜːt', 'n', ''));
DICTIONARY.set('worn out', new DictionaryWord('worn out', 'wɔːn ˈaʊt', 'n', 'Hao mòn'));
DICTIONARY.set('worn', new DictionaryWord('worn', 'wɔːn', 'n', ''));
DICTIONARY.set('out', new DictionaryWord('out', 'aʊt', 'n', ''));

DICTIONARY.set('heels', new DictionaryWord('heels', 'hiːls', 'n', ''));


DICTIONARY.set('stylish', new DictionaryWord('stylish', 'ˈstaɪ.lɪʃ', 'n', 'Sành điệu'));

DICTIONARY.set('accessories', new DictionaryWord('accessories', 'əkˈses.ər.i(z)', 'n', ''));

DICTIONARY.set('clothes', new DictionaryWord('clothes', 'kləʊðz', 'n', ''));
DICTIONARY.set('tall', new DictionaryWord('tall', 'tɔːl', 'n', ''));
DICTIONARY.set('scared', new DictionaryWord('scared', 'skeəd', 'n', ''));
DICTIONARY.set('scared', new DictionaryWord('scared', 'skeəd', 'n', ''));
DICTIONARY.set('scared', new DictionaryWord('scared', 'skeəd', 'n', ''));
DICTIONARY.set('scared', new DictionaryWord('scared', 'skeəd', 'n', ''));
DICTIONARY.set('scared', new DictionaryWord('scared', 'skeəd', 'n', ''));
DICTIONARY.set('scared', new DictionaryWord('scared', 'skeəd', 'n', ''));
DICTIONARY.set('scared', new DictionaryWord('scared', 'skeəd', 'n', ''));
DICTIONARY.set('scared', new DictionaryWord('scared', 'skeəd', 'n', ''));
DICTIONARY.set('scared', new DictionaryWord('scared', 'skeəd', 'n', ''));
DICTIONARY.set('scared', new DictionaryWord('scared', 'skeəd', 'n', ''));
DICTIONARY.set('scared', new DictionaryWord('scared', 'skeəd', 'n', ''));
DICTIONARY.set('scared', new DictionaryWord('scared', 'skeəd', 'n', ''));
DICTIONARY.set('scared', new DictionaryWord('scared', 'skeəd', 'n', ''));




export { DICTIONARY };
