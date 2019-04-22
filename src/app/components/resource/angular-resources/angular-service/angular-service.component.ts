import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbItem} from '../../../../data-model/breadcrumb';
import {BreadcrumbService} from '../../../../services/breadcrumb.service';
import {BookService} from '../../../../services/angular-services/book.service';
import {AngularBook} from '../../../../data-model/angular-book';

@Component({
  selector: 'app-angular-service',
  templateUrl: './angular-service.component.html',
  styleUrls: ['./angular-service.component.scss']
})
export class AngularServiceComponent implements OnInit, OnDestroy {
  selectedBook: AngularBook = null;
  breadCrumbItem: BreadcrumbItem = null;

  constructor(private breadcrumbService: BreadcrumbService, private bookService: BookService) {
  }

  ngOnInit() {
    this.breadCrumbItem = new BreadcrumbItem('Angular Service', 'ng-service');
    this.breadcrumbService.addBreadcrumbItem(this.breadCrumbItem);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.removeBreadcrumbItem(this.breadCrumbItem);
  }
}
