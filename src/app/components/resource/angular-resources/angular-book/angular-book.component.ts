import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AngularBook} from '../../../../data-model/angular-book';

@Component({
  selector: 'app-angular-book',
  templateUrl: './angular-book.component.html',
  styleUrls: ['./angular-book.component.scss']
})
export class AngularBookComponent implements OnInit {
  _book = null;

  @Input()
  get book() {
    return this._book;
  }

  @Output() bookChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  set book(newBook) {
    this._book = newBook;
    this.bookChange.emit(this._book);
  }

  triggerChange(): void {
    console.log('..................', this._book);
    this.bookChange.emit(this._book);
  }

  updateTitle(value): void {
    this._book.title = value;
    this.triggerChange();
  }

  updateAuthor(value): void {
    this._book.author = value;
    this.triggerChange();
  }

}
