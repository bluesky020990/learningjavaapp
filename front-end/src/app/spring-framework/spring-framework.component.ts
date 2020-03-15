import { Component, OnInit } from '@angular/core';
import {SpringService} from "./spring.service";

@Component({
  selector: 'app-spring-framework',
  templateUrl: './spring-framework.component.html',
  styleUrls: ['./spring-framework.component.scss']
})
export class SpringFrameworkComponent implements OnInit {

  constructor(private lessonServices: SpringService) { }

  ngOnInit() {
  }

}
