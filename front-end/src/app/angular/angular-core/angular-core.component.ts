import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularService} from "../angular.service";
import {LessonMapping} from "../../common/data.model";

@Component({
  selector: 'app-angular-core',
  templateUrl: './angular-core.component.html',
  styleUrls: ['./angular-core.component.scss']
})

export class AngularCoreComponent implements OnInit, OnDestroy {

  constructor(private angularService: AngularService) {

  }

  ngOnInit() {
    this.angularService.setCurrentLesson(new LessonMapping('core', '', 1));
  }

  ngOnDestroy(): void {
    this.angularService.setCurrentLesson(null);
  }
}
