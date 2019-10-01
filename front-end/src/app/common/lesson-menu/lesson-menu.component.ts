import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {LessonMapping} from "../data.model";
import {LessonMenuService} from "../lesson-menu.service";

@Component({
  selector: 'app-lesson-menu',
  templateUrl: './lesson-menu.component.html',
  styleUrls: ['./lesson-menu.component.scss']
})
export class LessonMenuComponent implements OnInit {
  @Input() lessonTitleDisplay: string;
  @Input() lessonService: LessonMenuService;

  listLesson: LessonMapping[];

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  ngOnInit() {
    this.lessonService.getListLesson().subscribe(items => this.listLesson = items);
  }

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
}
