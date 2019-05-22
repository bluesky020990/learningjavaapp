export class AngularBook {
  private _id: number;
  private _title: string;
  private _author: string;
  private _price: number;

  constructor(id: number, title: string, author: string, prize?: number) {
    this._id = id;
    this._title = title;
    this._author = author;
    this._price = prize;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}
