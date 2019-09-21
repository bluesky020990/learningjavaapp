import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularBook} from '../../data-model/angular-book';
import {AngularService} from "../angular.service";
import {LessonMapping} from "../../common/data.model";

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.scss']
})
export class AngularFormComponent implements OnInit, OnDestroy {
  username: string;

  listBook: AngularBook[] = null;
  selectedBook: AngularBook = null;

  constructor(private angularService: AngularService) {
  }

  generateListBook(): void {
    this.listBook = [];
    this.listBook.push(new AngularBook(1, 'B yeu Moi Moi', 'B Bung Bu'));
    this.listBook.push(new AngularBook(2, 'Moi Moi an hiep B', 'Moi Moi dang ghet'));
    this.listBook.push(new AngularBook(3, 'Noi gian de thuong', 'Noi gian'));
  }

  updateUserName($event) {
    this.username = $event + ' is updated';
    console.log($event);
  }

  viewDetailBook(book: AngularBook): void {
    this.selectedBook = book;
  }


  ngOnInit() {
    this.angularService.setCurrentLesson(new LessonMapping('form', '', 1));
    this.generateListBook();
  }

  ngOnDestroy(): void {
    this.angularService.setCurrentLesson(null);
  }
}
