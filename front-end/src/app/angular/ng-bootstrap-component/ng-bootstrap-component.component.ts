import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AngularService} from "../angular.service";
import {LessonMapping} from "../../common/data.model";

@Component({
  selector: 'app-ng-bootstrap-component',
  templateUrl: './ng-bootstrap-component.component.html',
  styleUrls: ['./ng-bootstrap-component.component.scss']
})

export class NgBootstrapComponentComponent implements OnInit, OnDestroy {
  modalRef: BsModalRef;

  constructor(private angularService: AngularService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.angularService.setCurrentLesson(new LessonMapping('ng-bootstrap', '', 1));
  }

  ngOnDestroy(): void {
    this.angularService.setCurrentLesson(null);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
