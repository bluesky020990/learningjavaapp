import { Component, OnInit } from '@angular/core';
import {LessonMapping} from "../../common/data.model";
import {DatabaseService} from "../database.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private lessonService: DatabaseService) { }

  ngOnInit() {
    this.lessonService.setCurrentLesson(new LessonMapping('tutorial', '', 1));
  }

  ngOnDestroy(): void {
    this.lessonService.setCurrentLesson(null);

  }
}
