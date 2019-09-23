import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularService} from "../angular.service";
import {LessonMapping} from "../../common/data.model";

@Component({
  selector: 'app-angular-boostrap',
  templateUrl: './angular-boostrap.component.html',
  styleUrls: ['./angular-boostrap.component.scss']
})
export class AngularBoostrapComponent implements OnInit, OnDestroy {
  constructor(private angularService: AngularService) {
  }


  ngOnInit() {
    this.angularService.setCurrentLesson(new LessonMapping('ng-bootstrap', '', 1));
  }

  ngOnDestroy(): void {
    this.angularService.setCurrentLesson(null);
  }
}
