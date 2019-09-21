import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {AngularService} from "../angular.service";
import {LessonMapping} from "../../common/data.model";


@Component({
  selector: 'app-angular-basic',
  templateUrl: './angular-basic.component.html',
  styleUrls: ['./angular-basic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AngularBasicComponent implements OnInit, OnDestroy {
  templateMessage: string = 'Đây là cái message vớ vẩn thôi.!!!';

  constructor(private angularService: AngularService) {
  }


  ngOnInit() {
    this.angularService.setCurrentLesson(new LessonMapping('basic', '', 1));
  }

  ngOnDestroy(): void {
    this.angularService.setCurrentLesson(null);
  }
}
