import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spring-jdbc',
  templateUrl: './spring-jdbc.component.html',
  styleUrls: ['./spring-jdbc.component.scss']
})
export class SpringJDBCComponent implements OnInit {
  applicationContextContent: string;
  constructor() { }

  ngOnInit() {
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

}
