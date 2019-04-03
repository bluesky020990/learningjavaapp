import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbService} from '../../../services/breadcrumb.service';
import {BreadcrumbItem} from '../../../data-model/breadcrumb';

@Component({
  selector: 'app-angular-resources',
  templateUrl: './angular-resources.component.html',
  styleUrls: ['./angular-resources.component.scss']
})
export class AngularResourcesComponent implements OnInit, OnDestroy {
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
