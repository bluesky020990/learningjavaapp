import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbItem} from '../data-model/breadcrumb';
import {BreadcrumbService} from '../services/breadcrumb.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit, OnDestroy {
  breadCrumbItem: BreadcrumbItem = new BreadcrumbItem('Angular', '/angular');

  constructor(private breadcrumbService: BreadcrumbService) {

  }

  ngOnInit() {
    this.breadcrumbService.addBreadcrumbItem(this.breadCrumbItem);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.removeBreadcrumbItem(this.breadCrumbItem);
  }
}
