import {ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {LessonMapping, LessonMappingI} from "../data.model";
import {MediaMatcher} from '@angular/cdk/layout';
import {MatSidenav} from "@angular/material";

const MAP_LESSON_DATA :LessonMappingI[] = [
  new LessonMapping('oveview', "Overview",  1),
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

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})

export class LessonComponent implements OnInit {
  @Input() listLesson: LessonMappingI[];
  @Input() currentLesson: LessonMappingI;
  @ViewChild('snav') snav: MatSidenav;

  ngOnInit() {
    console.log(this.currentLesson);
  }

}
