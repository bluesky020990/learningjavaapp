import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {BreadcrumbItem} from '../../../../data-model/breadcrumb';
import {BreadcrumbService} from '../../../../services/breadcrumb.service';

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

  selectName: string = null;

  constructor(private breadcrumbService: BreadcrumbService) {

  }

  ngOnInit() {
    this.breadCrumbItem = new BreadcrumbItem('Angular Components', 'ng-component');
    this.breadcrumbService.addBreadcrumbItem(this.breadCrumbItem);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.removeBreadcrumbItem(this.breadCrumbItem);
  }

  listenEmitEventFromChild(event) {
    this.selectName = event;
  }

}
