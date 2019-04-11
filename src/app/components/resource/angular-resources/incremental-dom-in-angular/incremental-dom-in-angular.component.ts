import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbItem} from '../../../../data-model/breadcrumb';
import {BreadcrumbService} from '../../../../services/breadcrumb.service';

@Component({
  selector: 'app-incremental-dom-in-angular',
  templateUrl: './incremental-dom-in-angular.component.html',
  styleUrls: ['./incremental-dom-in-angular.component.scss']
})
export class IncrementalDomInAngularComponent implements OnInit, OnDestroy {
  breadCrumbItem: BreadcrumbItem = null;

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit() {
    this.breadCrumbItem = new BreadcrumbItem('Angular DOM', 'ng-dom');
    this.breadcrumbService.addBreadcrumbItem(this.breadCrumbItem);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.removeBreadcrumbItem(this.breadCrumbItem);
  }
}
