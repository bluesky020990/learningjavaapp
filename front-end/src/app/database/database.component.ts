import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {LessonMappingI} from "../common/data.model";
import {MediaMatcher} from "@angular/cdk/layout";
import {DatabaseService} from "./database.service";

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit, OnDestroy {
  listLesson : LessonMappingI[] = null;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private lessonService: DatabaseService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.lessonService.getListLesson().subscribe(items => this.listLesson = items);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
