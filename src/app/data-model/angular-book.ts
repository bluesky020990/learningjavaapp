export class AngularBook {
  private _id: number;
  private _title: string;
  private _author: string;


  constructor(id: number, title: string, author: string) {
    this._id = id;
    this._title = title;
    this._author = author;
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
}
