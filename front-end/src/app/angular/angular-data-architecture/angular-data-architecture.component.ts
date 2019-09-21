import {Component, OnDestroy, OnInit} from '@angular/core';
import {LessonMapping} from "../../common/data.model";
import {AngularService} from "../angular.service";

@Component({
  selector: 'app-angular-data-architecture',
  templateUrl: './angular-data-architecture.component.html',
  styleUrls: ['./angular-data-architecture.component.scss']
})
export class AngularDataArchitectureComponent implements OnInit, OnDestroy {

  constructor(private angularService: AngularService) {
  }


  ngOnInit() {
    this.angularService.setCurrentLesson(new LessonMapping('data-architecture', '', 1));
  }

  ngOnDestroy(): void {
    this.angularService.setCurrentLesson(null);
  }
}
