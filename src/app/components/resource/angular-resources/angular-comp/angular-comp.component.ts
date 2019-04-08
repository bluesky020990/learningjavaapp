import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbItem} from '../../../../data-model/breadcrumb';
import {BreadcrumbService} from '../../../../services/breadcrumb.service';

@Component({
  selector: 'app-angular-comp',
  templateUrl: './angular-comp.component.html',
  styleUrls: ['./angular-comp.component.scss']
})
export class AngularCompComponent implements OnInit, OnDestroy {
  breadCrumbItem: BreadcrumbItem = null;

  constructor(private breadcrumbService: BreadcrumbService) {

  }

  ngOnInit() {
    this.breadCrumbItem = new BreadcrumbItem('Angular Components', 'ng-component');
    this.breadcrumbService.addBreadcrumbItem(this.breadCrumbItem);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.removeBreadcrumbItem(this.breadCrumbItem);
  }

}
