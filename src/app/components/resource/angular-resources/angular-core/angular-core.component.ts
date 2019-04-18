import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbItem} from '../../../../data-model/breadcrumb';
import {BreadcrumbService} from '../../../../services/breadcrumb.service';

@Component({
  selector: 'app-angular-core',
  templateUrl: './angular-core.component.html',
  styleUrls: ['./angular-core.component.scss']
})

export class AngularCoreComponent implements OnInit, OnDestroy {
  breadCrumbItem: BreadcrumbItem = null;

  constructor(private breadcrumbService: BreadcrumbService) {

  }

  ngOnInit() {
    this.breadCrumbItem = new BreadcrumbItem('Angular Core', 'ng-core');
    this.breadcrumbService.addBreadcrumbItem(this.breadCrumbItem);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.removeBreadcrumbItem(this.breadCrumbItem);
  }
}
