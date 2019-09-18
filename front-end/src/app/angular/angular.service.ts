import { Injectable } from '@angular/core';
import {LessonMapping, LessonMappingI} from "../common/data.model";
import {of} from "rxjs";

const MAP_LESSON_DATA :LessonMappingI[] = [
  new LessonMapping('overview', "Overview",  1),
  new LessonMapping('core', "Angular Core",  2),
  new LessonMapping('basic', "Angular Basic",  3),
  new LessonMapping('component', "Component",  4),
  new LessonMapping('service', "Service",  5),
  new LessonMapping('bootstrap', "Bootstrap",  6),
  new LessonMapping('ng-bootstrap', "Angular Bootstrap",  7),
  new LessonMapping('form', "Form",  8),
  new LessonMapping('router', "Router",  9),
  new LessonMapping('lazy-loader', "lazy Loader",  10),
  new LessonMapping('dom', "Angular DOM",  11),
  new LessonMapping('data-architecture', "Data Architecture",  12),
  new LessonMapping('testing', "Testing",  13),
  new LessonMapping('help', "Help",  14),
];

@Injectable({
  providedIn: 'root'
})
export class AngularService {
  currentLesson: LessonMappingI = null;
  constructor() { }

  getListLesson (){
    return of(MAP_LESSON_DATA);
  }

  getCurrentLesson(): LessonMappingI{
    return this.currentLesson;
  }

  setCurrentLesson(currentLesson: LessonMappingI){
    this.currentLesson = currentLesson;
    console.log(this.currentLesson);
  }
}
