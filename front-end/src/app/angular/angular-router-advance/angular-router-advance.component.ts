import {Component, OnDestroy, OnInit} from '@angular/core';
import {LessonMapping} from "../../common/data.model";
import {AngularService} from "../angular.service";

@Component({
  selector: 'app-angular-router-advance',
  templateUrl: './angular-router-advance.component.html',
  styleUrls: ['./angular-router-advance.component.scss']
})
export class AngularRouterAdvanceComponent implements OnInit, OnDestroy {

  constructor(private angularService: AngularService) {
  }

  ngOnInit() {
    this.angularService.setCurrentLesson(new LessonMapping('router-advance', '', 1));
  }

  ngOnDestroy(): void {
    this.angularService.setCurrentLesson(null);
  }
}
