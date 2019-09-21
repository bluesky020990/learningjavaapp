import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularBook} from '../../data-model/angular-book';
import {BookService} from '../../services/angular-services/book.service';
import {AngularService} from "../angular.service";
import {LessonMapping} from "../../common/data.model";

@Component({
  selector: 'app-angular-service',
  templateUrl: './angular-service.component.html',
  styleUrls: ['./angular-service.component.scss']
})
export class AngularServiceComponent implements OnInit, OnDestroy {
  selectedBook: AngularBook = null;

  constructor(private angularService: AngularService, private bookService: BookService) {
  }

  ngOnInit() {
    this.angularService.setCurrentLesson(new LessonMapping('service', '', 1));
    this.selectedBook = this.bookService.getSelectedBook();
  }

  ngOnDestroy(): void {
    this.angularService.setCurrentLesson(null);
  }
}
