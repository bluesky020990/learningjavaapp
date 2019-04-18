import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbItem} from '../../../../data-model/breadcrumb';
import {BreadcrumbService} from '../../../../services/breadcrumb.service';
import {IPerson} from '../angular-comp/angular-comp.component';

@Component({
  selector: 'app-angular-directives',
  templateUrl: './angular-directives.component.html',
  styleUrls: ['./angular-directives.component.scss']
})
export class AngularDirectivesComponent implements OnInit, OnDestroy {
  breadCrumbItem: BreadcrumbItem = null;

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

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit() {
    this.breadCrumbItem = new BreadcrumbItem('Angular Directives', 'ng-directives');
    this.breadcrumbService.addBreadcrumbItem(this.breadCrumbItem);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.removeBreadcrumbItem(this.breadCrumbItem);
  }

}
