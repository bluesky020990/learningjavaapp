import {Component, OnDestroy, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {MAP_LESSON_DATA, SpringService} from "../spring.service";
import {LessonMapping} from "../../common/data.model";

@Component({
  selector: 'app-spring-container',
  templateUrl: './spring-container.component.html',
  styleUrls: ['./spring-container.component.scss']
})
export class SpringContainerComponent implements OnInit, OnDestroy {
  modalRef: BsModalRef;

  constructor(private lessonService: SpringService) {
  }

  ngOnInit() {
    const currentLesson = MAP_LESSON_DATA[2];
    this.lessonService.setCurrentLesson(new LessonMapping(currentLesson.path, currentLesson.name, currentLesson.displayOrder));
  }

  ngOnDestroy(): void {
    this.lessonService.setCurrentLesson(null);
  }

}
