import { Injectable } from '@angular/core';
import {AngularBook} from '../../data-model/angular-book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  listBook: AngularBook[];
  selectedBook: AngularBook = null;

  constructor() {
    this.initData();
  }

  initData(): void {
    this.listBook = [];
    this.listBook.push(new AngularBook(1, 'Moi Moi La Dua Khung', 'B De Thuong', 30));
    this.listBook.push(new AngularBook(2, 'B de thuong dang yeu', 'MOi Moi Xau Tinh', 15));
    this.listBook.push(new AngularBook(3, 'Moi gian cham ngoan', 'B De Thuong', 20));
    this.listBook.push(new AngularBook(4, 'Cu oc li lom giong me no', 'Moi Moi', 25));
  }

  getListBook(): AngularBook[] {
    return this.listBook;
  }

  setSelectedBook(book): void {
    this.selectedBook = book;
  }

  getSelectedBook(): AngularBook {
    return this.selectedBook;
  }
}
