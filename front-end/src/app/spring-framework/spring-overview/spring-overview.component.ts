import {Component, OnDestroy, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {LessonMapping} from "../../common/data.model";
import {MAP_LESSON_DATA, SpringService} from "../spring.service";

@Component({
  selector: 'app-spring-overview',
  templateUrl: './spring-overview.component.html',
  styleUrls: ['./spring-overview.component.scss']
})
export class SpringOverviewComponent implements OnInit, OnDestroy {
  modalRef: BsModalRef;

  constructor(private lessonService: SpringService, private modalService: BsModalService) {
  }

  ngOnInit() {
    const currentLesson = MAP_LESSON_DATA[0];

    this.lessonService.setCurrentLesson(new LessonMapping(currentLesson.path, currentLesson.name, currentLesson.displayOrder));
  }

  ngOnDestroy(): void {
    this.lessonService.setCurrentLesson(null);
  }

}
