import { Injectable } from '@angular/core';
import {LessonMapping, LessonMappingI} from "../common/data.model";
import {of} from "rxjs";

const MAP_LESSON_DATA :LessonMappingI[] = [
  new LessonMapping('overview', "Overview",  1),
  new LessonMapping('non-sql', "NO-SQL Database",  2),
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
