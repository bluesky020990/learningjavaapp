export class DictionaryWord {
  private _term: string;
  private _type: string;
  private _description: string;
  private _pronunciation: string;

  constructor(term: string, type: string, description: string, pronunciation: string) {
    this._term = term;
    this._type = type;
    this._description = description;
    this._pronunciation = pronunciation;
  }

  get term(): string {
    return this._term;
  }

  set term(value: string) {
    this._term = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get pronunciation(): string {
    return this._pronunciation;
  }

  set pronunciation(value: string) {
    this._pronunciation = value;
  }
}
