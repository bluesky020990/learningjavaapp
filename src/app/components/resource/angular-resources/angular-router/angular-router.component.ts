import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbService} from '../../../../services/breadcrumb.service';
import {BreadcrumbItem} from '../../../../data-model/breadcrumb';

@Component({
  selector: 'app-angular-router',
  templateUrl: './angular-router.component.html',
  styleUrls: ['./angular-router.component.scss']
})
export class AngularRouterComponent implements OnInit, OnDestroy {

  breadCrumbItem: BreadcrumbItem = null;

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit() {
    this.breadCrumbItem = new BreadcrumbItem('Router', 'router');
    this.breadcrumbService.addBreadcrumbItem(this.breadCrumbItem);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.removeBreadcrumbItem(this.breadCrumbItem);
  }
}
