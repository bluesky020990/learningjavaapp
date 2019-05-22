import { Component, OnInit } from '@angular/core';
import {BreadcrumbService} from '../../services/breadcrumb.service';
import {BreadcrumbItem} from "../../data-model/breadcrumb";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  listItem: BreadcrumbItem[] = null;

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.listItem = this.breadcrumbService.getListBreadcrumbItem();
  }

}
