import { Injectable } from '@angular/core';
import {LessonMapping} from "../common/data.model";
import {of} from "rxjs";
import {LessonMenuService} from "../common/lesson-menu.service";


export const MAP_LESSON_DATA :LessonMapping[] = [
  // new LessonMapping('tutorial', "Tutorial",  1, null),
  new LessonMapping('overview', "Overview",  1, null),
  new LessonMapping('module', "Spring Modules",  2, null),
  new LessonMapping('dependence-injection', "Dependence-injection",  2, null),
  new LessonMapping('aop', "AOP in Spring",  3, null),
  new LessonMapping('jdpb', "Spring JDBC template",  6, null),
  new LessonMapping('orm', "Spring ORM",  4, null),
  new LessonMapping('mvc', "Spring MVC",  5, null),
  new LessonMapping('mvc-form', "mvc-form",  6, null),
  new LessonMapping('mcv-application', "mcv-application",  7, null),
  new LessonMapping('mvc-validator', "mvc-validator",  8, null),
  new LessonMapping('remoting', "Angular DOM",  9, null),
  new LessonMapping('java-mail', "Java Mail",  13, null),
  new LessonMapping('web', "Web",  10, null),
  new LessonMapping('security', "Security",  11, null),
  new LessonMapping('springboot', "Spring Boot",  12, null),
  new LessonMapping('angular', "Spring and Angular",  13, null),
  new LessonMapping('help', "Help",  14, null),
];

@Injectable({
  providedIn: 'root'
})
export class SpringService extends LessonMenuService{
  constructor() {
    super();
  }

  getListLesson (){
    return of(MAP_LESSON_DATA);
  }
}
