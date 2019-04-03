import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbService} from '../../../../services/breadcrumb.service';
import {BreadcrumbItem} from '../../../../data-model/breadcrumb';

@Component({
  selector: 'app-angular-router-advance',
  templateUrl: './angular-router-advance.component.html',
  styleUrls: ['./angular-router-advance.component.scss']
})
export class AngularRouterAdvanceComponent implements OnInit, OnDestroy {
  breadCrumbItem: BreadcrumbItem = null;

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit() {
    this.breadCrumbItem = new BreadcrumbItem('Router Advance', 'router-advance');
    this.breadcrumbService.addBreadcrumbItem(this.breadCrumbItem);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.removeBreadcrumbItem(this.breadCrumbItem);
  }
}
