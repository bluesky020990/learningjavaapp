import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbItem} from '../../data-model/breadcrumb';
import {BreadcrumbService} from '../../services/breadcrumb.service';
import {AngularService} from "../angular.service";
import {LessonMapping} from "../../common/data.model";

@Component({
  selector: 'app-incremental-dom-in-angular',
  templateUrl: './incremental-dom-in-angular.component.html',
  styleUrls: ['./incremental-dom-in-angular.component.scss']
})
export class IncrementalDomInAngularComponent implements OnInit, OnDestroy {

  constructor(private angularService: AngularService) {
  }


  ngOnInit() {
    this.angularService.setCurrentLesson(new LessonMapping('ng-dom', '', 1));
  }

  ngOnDestroy(): void {
    this.angularService.setCurrentLesson(null);
  }


}
