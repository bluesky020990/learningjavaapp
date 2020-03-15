import {Component, OnDestroy, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {MAP_LESSON_DATA, SpringService} from "../spring.service";
import {LessonMapping} from "../../common/data.model";

@Component({
  selector: 'app-spring-mvc',
  templateUrl: './spring-mvc.component.html',
  styleUrls: ['./spring-mvc.component.scss']
})
export class SpringMVCComponent implements  OnInit, OnDestroy  {
  dispatchServletContent : string = null;
  constructor(private lessonService: SpringService) { }

  ngOnInit() {
    const currentLesson = MAP_LESSON_DATA[6];
    this.lessonService.setCurrentLesson(new LessonMapping(currentLesson.path, currentLesson.name, currentLesson.displayOrder));

    const content = [
        `<?xml version="1.0" encoding="UTF-8"?>`,
      `<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://java.sun.com/xml/ns/javaee" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee 
http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd" id="WebApp_ID" version="3.0">`,
      `<display-name>SpringMVC</display-name>`,
      `<servlet>`,
      `<servlet-name>spring</servlet-name>`,
      `<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>` ,
      `<load-on-startup>1</load-on-startup>` ,
      `</servlet>`  ,
      `<servlet-mapping>`,
      `<servlet-name>spring</servlet-name>` ,
      `<url-pattern>/</url-pattern>` ,
      `</servlet-mapping>`,
      `</web-app>`
    ];

    this.dispatchServletContent = content.join("<br />");
  }

  ngOnDestroy(): void {
    this.lessonService.setCurrentLesson(null);
  }

}
