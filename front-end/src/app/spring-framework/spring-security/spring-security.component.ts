import {Component, OnDestroy, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {MAP_LESSON_DATA, SpringService} from "../spring.service";
import {LessonMapping} from "../../common/data.model";

@Component({
  selector: 'app-spring-security',
  templateUrl: './spring-security.component.html',
  styleUrls: ['./spring-security.component.scss']
})
export class SpringSecurityComponent implements OnInit, OnDestroy {
  modalRef: BsModalRef;

  constructor(private lessonService: SpringService) {
  }

  ngOnInit() {
    const currentLesson = MAP_LESSON_DATA[13];
    this.lessonService.setCurrentLesson(new LessonMapping(currentLesson.path, currentLesson.name, currentLesson.displayOrder));
  }

  ngOnDestroy(): void {
    this.lessonService.setCurrentLesson(null);
  }

}
