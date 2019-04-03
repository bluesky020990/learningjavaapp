import {Injectable} from '@angular/core';
import {BreadcrumbItem} from '../data-model/breadcrumb';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  listBreadcrumbItems: BreadcrumbItem[];

  constructor() {
    this.listBreadcrumbItems = [];
  }

  addBreadcrumbItem(breadcrumbItem: BreadcrumbItem) {
    this.listBreadcrumbItems.push(breadcrumbItem);
  }

  removeBreadcrumbItem(breadcrumbItem: BreadcrumbItem) {
    const indexItem = this.listBreadcrumbItems.findIndex((item) => {
      return item.name === breadcrumbItem.name && item.routerLink === breadcrumbItem.routerLink;
    });

    this.listBreadcrumbItems.slice(indexItem, 1);
    console.log(this.listBreadcrumbItems);
  }

  getListBreadcrumbItem(): BreadcrumbItem[] {
    return this.listBreadcrumbItems;
  }
}
