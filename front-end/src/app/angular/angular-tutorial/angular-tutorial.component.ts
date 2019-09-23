import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularService} from "../angular.service";
import {LessonMapping} from "../../common/data.model";


@Component({
  selector: 'app-angular-tutorial',
  templateUrl: './angular-tutorial.component.html',
  styleUrls: ['./angular-tutorial.component.scss']
})
export class AngularTutorialComponent implements OnInit, OnDestroy {
  constructor(private angularService: AngularService) { }

  ngOnInit() {
    this.angularService.setCurrentLesson(new LessonMapping('tutorial', '', 1));
  }

  ngOnDestroy(): void {
    this.angularService.setCurrentLesson(null);

  }
}
