import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {BreadcrumbItem} from '../../data-model/breadcrumb';
import {BreadcrumbService} from '../../services/breadcrumb.service';
import {LessonMapping} from "../../common/data.model";
import {AngularService} from "../angular.service";

export interface IPerson {
  name: string;
  age: number;
}

@Component({
  selector: 'app-angular-comp',
  templateUrl: './angular-comp.component.html',
  styleUrls: ['./angular-comp.component.scss']
})

export class AngularCompComponent implements OnInit, OnDestroy {
  breadCrumbItem: BreadcrumbItem = null;
  sampleVariable: string = 'This is sample Variable';
  ngIfValue: string = 'red';
  personArray: IPerson[] = [{
    name: 'Mọi Mọi', age: 100,
  }, {
    name: 'B Bụng bự', age: 29,
  }, {
    name: 'Cu Ốc', age: 10,
  }, {
    name: 'Bé Hương', age: 16,
  }, {
    name: 'Cà Na', age: 3,
  }];

  listBarGraphColor = [{color: 'red', value : 10}, {color: 'blue', value : 5}, {color: 'orange', value : 7}];
  selectName: string = null;

  constructor(private angularService: AngularService) {

  }

  ngOnInit() {
    this.angularService.setCurrentLesson(new LessonMapping('component', '', 1));
  }

  ngOnDestroy(): void {
    this.angularService.setCurrentLesson(null);
  }

  listenEmitEventFromChild(event) {
    this.selectName = event;
  }

}
