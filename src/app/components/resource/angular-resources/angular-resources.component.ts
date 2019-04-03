import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-resources',
  templateUrl: './angular-resources.component.html',
  styleUrls: ['./angular-resources.component.scss']
})
export class AngularResourcesComponent implements OnInit {
  private lessonTitle: string = 'Current';

  constructor() {
  }

  ngOnInit() {
  }

}
