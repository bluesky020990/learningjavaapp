import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../../../services/angular-services/book.service';
import {AngularBook} from '../../../../../data-model/angular-book';

@Component({
  selector: 'app-angular-list-book-example',
  templateUrl: './angular-list-book-example.component.html',
  styleUrls: ['./angular-list-book-example.component.scss']
})
export class AngularListBookExampleComponent implements OnInit {
  listBook: AngularBook[];
  // selectedBook: AngularBook = null;

  constructor(private bookService: BookService) {

  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.listBook = this.bookService.getListBook();
  }

  viewThisBook(book: AngularBook): void {
    this.bookService.setSelectedBook(book);
    // this.selectedBook = book;
  }
}
