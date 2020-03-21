import { Injectable } from '@angular/core';
import {LessonCategory, LessonMapping} from "../common/data.model";
import {of} from "rxjs";
import {LessonMenuService} from "../common/lesson-menu.service";

let i = 1;
export const MAP_LESSON_DATA :LessonMapping[] = [
  new LessonMapping('overview', "Overview",  i, null),

  new LessonCategory('', "Spring Module",  1, 'Spring Module', null),
  new LessonMapping('module', "Spring Modules",  i++, null),
  new LessonMapping('core-module', "Core Module",  i++, null),
  new LessonMapping('aop-module', "AOP Module",  i++, null),

  new LessonCategory('', "Data Access Module",  1, 'Data Access Module', null),
  new LessonMapping('jpa', "Spring ORM",  i++, null),
  new LessonMapping('hibernate', "Hibernate",  i++, null),
  new LessonMapping('orm', "Spring ORM",  i++, null),

  new LessonCategory('', "Spring Web",  1, 'Spring Web', null),
  new LessonMapping('mvc', "Spring MVC",  i++, null),
  new LessonMapping('mvc-form', "mvc-form",  i++, null),
  new LessonMapping('mcv-application', "mcv-application",  i++, null),
  new LessonMapping('mvc-validator', "mvc-validator",  i++, null),

  new LessonCategory('', "Spring Security",  1, 'Spring Security', null),
  new LessonMapping('security', "Security",  i++, null),
  new LessonMapping('remoting', "Angular DOM",  i++, null),
  new LessonMapping('java-mail', "Java Mail",  i++, null),
  new LessonMapping('angular', "Spring and Angular",  i++, null),


  new LessonCategory('', "Spring Boot",  1, 'Spring Boot', null),
  new LessonMapping('springboot', "Spring Boot",  i++, null),
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
