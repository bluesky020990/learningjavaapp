import { Injectable } from '@angular/core';
import {LessonMapping} from "../common/data.model";
import {of} from "rxjs";
import {LessonMenuService} from "../common/lesson-menu.service";

const MAP_LESSON_DATA :LessonMapping[] = [
  new LessonMapping('tutorial', "Tutorial",  1, null),
  new LessonMapping('overview', "Overview",  2, null),
  new LessonMapping('basic', "Angular Basic",  4, null),
  new LessonMapping('component', "Component",  5, null),
  new LessonMapping('service', "Service",  6, null),
  new LessonMapping('bootstrap', "Bootstrap",  7, null),
  new LessonMapping('ng-bootstrap', "Angular Bootstrap",  8, null),
  new LessonMapping('form', "Form",  9, null),
  new LessonMapping('router', "Router",  10, null),
  new LessonMapping('lazy-loader', "Lazy Loader",  11, null),
  new LessonMapping('ng-dom', "Angular DOM",  12, null),
  new LessonMapping('data-architecture', "Data Architecture",  13, null),
  new LessonMapping('testing', "Testing",  14, null),
  new LessonMapping('help', "Help",  15, null),
];

@Injectable({
  providedIn: 'root'
})
export class AngularService extends LessonMenuService{
  constructor() {
    super();
  }

  getListLesson (){
    return of(MAP_LESSON_DATA);
  }
}
