import { Injectable } from '@angular/core';
import {LessonMapping, LessonMappingI} from "../common/data.model";
import {of} from "rxjs";

const MAP_LESSON_DATA :LessonMappingI[] = [
  new LessonMapping('overview', "Overview",  1, null),
  new LessonMapping('non-sql', "NO-SQL Database",  2, null),
];

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
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
  }
}
