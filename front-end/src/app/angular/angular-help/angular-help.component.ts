import { Component, OnInit } from '@angular/core';
import {AngularService} from "../angular.service";
import {LessonMapping} from "../../common/data.model";

@Component({
  selector: 'app-angular-help',
  templateUrl: './angular-help.component.html',
  styleUrls: ['./angular-help.component.scss']
})
export class AngularHelpComponent implements OnInit {

  constructor(private angularService: AngularService) {
  }

  ngOnInit() {
    this.angularService.setCurrentLesson(new LessonMapping('help', '', 1));
  }

  ngOnDestroy(): void {
    this.angularService.setCurrentLesson(null);
  }
}
