import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbService} from '../../services/breadcrumb.service';
import {BreadcrumbItem} from '../../data-model/breadcrumb';

@Component({
  selector: 'app-angular-boostrap',
  templateUrl: './angular-boostrap.component.html',
  styleUrls: ['./angular-boostrap.component.scss']
})
export class AngularBoostrapComponent implements OnInit, OnDestroy {
  breadCrumbItem: BreadcrumbItem = null;

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit() {
    this.breadCrumbItem = new BreadcrumbItem('Bootstrap', 'bootstrap');
    this.breadcrumbService.addBreadcrumbItem(this.breadCrumbItem);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.removeBreadcrumbItem(this.breadCrumbItem);
  }
}
