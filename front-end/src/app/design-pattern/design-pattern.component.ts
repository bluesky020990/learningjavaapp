import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LessonMappingI} from "../common/data.model";
import {MediaMatcher} from "@angular/cdk/layout";
import {DesignPatternService} from "./design-pattern.service";



@Component({
  selector: 'app-design-pattern',
  templateUrl: './design-pattern.component.html',
  styleUrls: ['./design-pattern.component.scss']
})

export class DesignPatternComponent implements OnInit {

  listLesson : LessonMappingI[] = null;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private lessonService: DesignPatternService) {
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
