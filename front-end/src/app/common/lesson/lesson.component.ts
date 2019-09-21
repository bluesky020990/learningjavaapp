import {ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {LessonMappingI} from "../data.model";
import {MatSidenav} from "@angular/material";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})

export class LessonComponent implements OnInit {
  @Input() listLesson: LessonMappingI[];
  @Input() currentLesson: LessonMappingI;
  @ViewChild('snav') snav: MatSidenav;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    console.log(this.currentLesson);
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}
