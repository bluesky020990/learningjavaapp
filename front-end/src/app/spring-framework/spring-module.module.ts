import { ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from "@angular/router";
import { SpringFrameworkComponent } from "./spring-framework.component";
import { SpringOverviewComponent } from './spring-overview/spring-overview.component';
import { SpringDependenceInjectionComponent } from './spring-dependence-injection/spring-dependence-injection.component';
import { SpringAOPComponent } from './spring-aop/spring-aop.component';
import { SpringJDBCComponent } from './spring-jdbc/spring-jdbc.component';
import { SpringORMComponent } from './spring-orm/spring-orm.component';
import { SpringMVCComponent } from './spring-mvc/spring-mvc.component';
import { SpringMVCFormComponent } from './spring-mvcform/spring-mvcform.component';
import { SpringMVCApplicationComponent } from './spring-mvcapplication/spring-mvcapplication.component';
import { SpringMVCValidatorComponent } from './spring-mvcvalidator/spring-mvcvalidator.component';
import { SpringRemotingComponent } from './spring-remoting/spring-remoting.component';
import { SpringJavaMailComponent } from './spring-java-mail/spring-java-mail.component';
import { SpringSecurityComponent } from './spring-security/spring-security.component';
import { SpringBootComponent } from './spring-boot/spring-boot.component';
import { SpringNAngularComponent } from './spring-nangular/spring-nangular.component';
import {CommonLessonModule} from "../common/common.module";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";
import {BootstrapModule} from "../material/bootstrap.module";
import {SpringContainerComponent} from "./spring-container/spring-container.component";

const routing: Routes = [{
  path: '',
  component: SpringFrameworkComponent,
  children: [
    {path: '', redirectTo: 'overview', pathMatch: 'full'},
    {path: 'overview', component: SpringOverviewComponent},


    {path: 'module', component: SpringContainerComponent},
    {path: 'core-module', component: SpringDependenceInjectionComponent},
    {path: 'aop-module', component: SpringAOPComponent},

    {path: 'jpa', component: SpringJDBCComponent},
    {path: 'hibernate', component: SpringJDBCComponent},
    {path: 'orm', component: SpringORMComponent},


    {path: 'mvc', component: SpringMVCComponent},
    {path: 'mvc-form', component: SpringMVCFormComponent},
    {path: 'mcv-application', component: SpringMVCApplicationComponent},
    {path: 'mvc-validator', component: SpringMVCValidatorComponent},

    {path: 'security', component: SpringSecurityComponent},
    {path: 'remoting', component: SpringRemotingComponent},
    {path: 'java-mail', component: SpringJavaMailComponent},
    {path: 'angular', component: SpringNAngularComponent},


    {path: 'springboot', component: SpringBootComponent}
  ]
}];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);


@NgModule({
  declarations: [
    SpringFrameworkComponent,
    SpringOverviewComponent,

    SpringContainerComponent,
    SpringDependenceInjectionComponent,
    SpringAOPComponent,

    SpringJDBCComponent,
    SpringORMComponent,

    SpringMVCComponent,
    SpringMVCFormComponent,
    SpringMVCApplicationComponent,
    SpringMVCValidatorComponent,

    SpringRemotingComponent,
    SpringJavaMailComponent,
    SpringSecurityComponent,
    SpringNAngularComponent,

    SpringBootComponent
  ],
  imports: [
    CommonModule,
    Routing,

    FormsModule,
    MaterialModule,
    BootstrapModule,
    CommonLessonModule
  ]
})


export class SpringModuleModule { }
