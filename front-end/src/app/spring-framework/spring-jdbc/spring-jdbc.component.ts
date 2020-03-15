import {Component, OnDestroy, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {MAP_LESSON_DATA, SpringService} from "../spring.service";
import {LessonMapping} from "../../common/data.model";

@Component({
  selector: 'app-spring-jdbc',
  templateUrl: './spring-jdbc.component.html',
  styleUrls: ['./spring-jdbc.component.scss']
})
export class SpringJDBCComponent implements OnInit, OnDestroy {
  applicationContextContent: string;

  constructor(private lessonService: SpringService) {
  }

  ngOnInit() {
    const currentLesson = MAP_LESSON_DATA[13];
    this.lessonService.setCurrentLesson(new LessonMapping(currentLesson.path, currentLesson.name, currentLesson.displayOrder));

    const stringTemplate =
      [`<?xml version="1.0" encoding="UTF-8"?>`,
        `<beans  `,
        `xmlns="http://www.springframework.org/schema/beans"`,
        `    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" `,
        `  xmlns:p="http://www.springframework.org/schema/p"  `,
        `xsi:schemaLocation="http://www.springframework.org/schema/beans`,
        `http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">  `,
        ``,
        `<bean id="ds" class="org.springframework.jdbc.datasource.DriverManagerDataSource">`,
        `<property name="driverClassName" value="oracle.jdbc.driver.OracleDriver" />  `,
        `<property name="url" value="jdbc:oracle:thin:@localhost:1521:xe" />  `,
        `<property name="username" value="system" />  `,
        `<property name="password" value="oracle" />  `,
        `</bean>  `,
        ``,
        `<bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">`,
        `<property name="dataSource" ref="ds"></property>  `,
        `</bean>  `,
        ``,
        `<bean id="edao" class="com.javatpoint.EmployeeDao">`,
        `<property name="jdbcTemplate" ref="jdbcTemplate"></property>`,
        `</bean>  `,
        `</beans>`
      ];

    this.applicationContextContent = stringTemplate.join('<br />');
  }

  ngOnDestroy(): void {
    this.lessonService.setCurrentLesson(null);
  }

}
