import {Component, OnDestroy, OnInit} from '@angular/core';
import {LessonMapping} from "../../common/data.model";
import {AngularService} from "../angular.service";

@Component({
  selector: 'app-angular-testing',
  templateUrl: './angular-testing.component.html',
  styleUrls: ['./angular-testing.component.scss']
})
export class AngularTestingComponent implements OnInit, OnDestroy {

  constructor(private angularService: AngularService) {

  }

  ngOnInit() {
    this.angularService.setCurrentLesson(new LessonMapping('testing', '', 1));
  }

  ngOnDestroy(): void {
    this.angularService.setCurrentLesson(null);
  }
}
