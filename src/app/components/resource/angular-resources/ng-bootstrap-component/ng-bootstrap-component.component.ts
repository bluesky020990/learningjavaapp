import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {BreadcrumbItem} from '../../../../data-model/breadcrumb';
import {BreadcrumbService} from '../../../../services/breadcrumb.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-ng-bootstrap-component',
  templateUrl: './ng-bootstrap-component.component.html',
  styleUrls: ['./ng-bootstrap-component.component.scss']
})

export class NgBootstrapComponentComponent implements OnInit, OnDestroy {
  breadCrumbItem: BreadcrumbItem = null;
  modalRef: BsModalRef;

  constructor(private breadcrumbService: BreadcrumbService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.breadCrumbItem = new BreadcrumbItem('Ng-Bootstrap', 'ng-bootstrap');
    this.breadcrumbService.addBreadcrumbItem(this.breadCrumbItem);
  }

  ngOnDestroy(): void {
    this.breadcrumbService.removeBreadcrumbItem(this.breadCrumbItem);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
