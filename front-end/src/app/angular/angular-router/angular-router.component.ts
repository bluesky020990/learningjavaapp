import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularService} from "../angular.service";
import {LessonMapping} from "../../common/data.model";

@Component({
  selector: 'app-angular-router',
  templateUrl: './angular-router.component.html',
  styleUrls: ['./angular-router.component.scss']
})
export class AngularRouterComponent implements OnInit, OnDestroy {

  constructor(private angularService: AngularService) {
  }

  ngOnInit() {
    this.angularService.setCurrentLesson(new LessonMapping('router', '', 1));
  }

  ngOnDestroy(): void {
    this.angularService.setCurrentLesson(null);
  }
}
