import { Component, OnInit } from '@angular/core';
import {AngularService} from "../angular.service";
import {LessonMapping} from "../../common/data.model";

@Component({
  selector: 'app-lazy-loader',
  templateUrl: './lazy-loader.component.html',
  styleUrls: ['./lazy-loader.component.scss']
})
export class LazyLoaderComponent implements OnInit {

  constructor(private angularService: AngularService) { }

  ngOnInit() {
    this.angularService.setCurrentLesson(new LessonMapping('lazy-loader', '', 1));
  }

  ngOnDestroy(): void {
    this.angularService.setCurrentLesson(null);

  }
}
