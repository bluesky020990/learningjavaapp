import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbItem} from '../../../../data-model/breadcrumb';
import {BreadcrumbService} from '../../../../services/breadcrumb.service';
import {AngularBook} from '../../../../data-model/angular-book';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.scss']
})
export class AngularFormComponent implements OnInit, OnDestroy {
  username: string;

  breadCrumbItem: BreadcrumbItem = null;
  listBook: AngularBook[] = null;
  selectedBook: AngularBook = null;

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit() {
    this.breadCrumbItem = new BreadcrumbItem('Angular Form', 'ng-form');
    this.breadcrumbService.addBreadcrumbItem(this.breadCrumbItem);
    this.generateListBook();
  }

  generateListBook(): void {
    this.listBook = [];
    this.listBook.push(new AngularBook(1, 'B yeu Moi Moi', 'B Bung Bu'));
    this.listBook.push(new AngularBook(2, 'Moi Moi an hiep B', 'Moi Moi dang ghet'));
    this.listBook.push(new AngularBook(3, 'Noi gian de thuong', 'Noi gian'));
  }

  ngOnDestroy(): void {
    this.breadcrumbService.removeBreadcrumbItem(this.breadCrumbItem);
  }


  updateUserName($event) {
    this.username = $event + ' is updated';
    console.log($event);
  }

  viewDetailBook(book: AngularBook): void {
    this.selectedBook = book;
  }
}
