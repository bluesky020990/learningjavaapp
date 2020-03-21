import { Injectable } from '@angular/core';
import {LessonMapping} from "./data.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class LessonMenuService {
  currentLesson: LessonMapping;

  constructor() { }

  abstract getListLesson() : Observable<LessonMapping[]>;

  getCurrentLesson(): LessonMapping {
    return this.currentLesson;
  };

  setCurrentLessonByObject(currentLesson: LessonMapping){
    //new LessonMapping(currentLesson.path, currentLesson.name, currentLesson.displayOrder)
    this.setCurrentLesson(currentLesson);
  }

  setCurrentLesson(currentLesson: LessonMapping){
    this.currentLesson = currentLesson;
  };
}


