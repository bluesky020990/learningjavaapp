import { Injectable } from '@angular/core';
import {LessonMapping} from "../common/data.model";
import {of} from "rxjs";
import {LessonMenuService} from "../common/lesson-menu.service";

const MAP_LESSON_DATA :LessonMapping[] = [
  new LessonMapping('tutorial', "Tutorial",  1),
  new LessonMapping('overview', "Overview",  2),
  new LessonMapping('basic', "Angular Basic",  4),
  new LessonMapping('component', "Component",  5),
  new LessonMapping('service', "Service",  6),
  new LessonMapping('bootstrap', "Bootstrap",  7),
  new LessonMapping('ng-bootstrap', "Angular Bootstrap",  8),
  new LessonMapping('form', "Form",  9),
  new LessonMapping('router', "Router",  10),
  new LessonMapping('lazy-loader', "Lazy Loader",  11),
  new LessonMapping('ng-dom', "Angular DOM",  12),
  new LessonMapping('data-architecture', "Data Architecture",  13),
  new LessonMapping('testing', "Testing",  14),
  new LessonMapping('help', "Help",  15),
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
