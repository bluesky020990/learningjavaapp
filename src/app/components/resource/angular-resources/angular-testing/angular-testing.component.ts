import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbItem} from '../../../../data-model/breadcrumb';
import {BreadcrumbService} from '../../../../services/breadcrumb.service';

@Component({
  selector: 'app-angular-testing',
  templateUrl: './angular-testing.component.html',
  styleUrls: ['./angular-testing.component.scss']
})
export class AngularTestingComponent implements OnInit, OnDestroy {
  breadCrumbItem: BreadcrumbItem = null;

  constructor(private breadcrumbService: BreadcrumbService) {

  }

  ngOnInit() {
    this.breadCrumbItem = new BreadcrumbItem('Angular Testing', 'ng-testing');
    this.breadcrumbService.addBreadcrumbItem(this.breadCrumbItem);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.removeBreadcrumbItem(this.breadCrumbItem);
  }
}
