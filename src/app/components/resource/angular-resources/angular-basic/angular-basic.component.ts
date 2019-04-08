import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {BreadcrumbItem} from '../../../../data-model/breadcrumb';
import {BreadcrumbService} from '../../../../services/breadcrumb.service';

@Component({
  selector: 'app-angular-basic',
  templateUrl: './angular-basic.component.html',
  styleUrls: ['./angular-basic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AngularBasicComponent implements OnInit, OnDestroy {
  breadCrumbItem: BreadcrumbItem = null;

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit() {
    this.breadCrumbItem = new BreadcrumbItem('Angular Basic', 'basic');
    this.breadcrumbService.addBreadcrumbItem(this.breadCrumbItem);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.removeBreadcrumbItem(this.breadCrumbItem);
  }
}
