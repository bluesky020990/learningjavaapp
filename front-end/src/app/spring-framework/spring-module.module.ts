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
import { SpringWebComponent } from './spring-web/spring-web.component';
import { SpringSecurityComponent } from './spring-security/spring-security.component';
import { SpringBootComponent } from './spring-boot/spring-boot.component';
import { SpringNAngularComponent } from './spring-nangular/spring-nangular.component';

const routing: Routes = [{
  path: '',
  component: SpringFrameworkComponent,
  children: [
    {path: '', redirectTo: 'overview', pathMatch: 'full'},
    {path: 'overview', component: SpringOverviewComponent},
    {path: 'dependence-injection', component: SpringDependenceInjectionComponent},
    {path: 'aop', component: SpringAOPComponent},
    {path: 'jdpb', component: SpringJDBCComponent},
    {path: 'orm', component: SpringORMComponent},
    {path: 'mvc', component: SpringMVCComponent},
    {path: 'mvc-form', component: SpringMVCFormComponent},
    {path: 'mcv-application', component: SpringMVCApplicationComponent},
    {path: 'mvc-validator', component: SpringMVCValidatorComponent},
    {path: 'remoting', component: SpringRemotingComponent},
    {path: 'java-mail', component: SpringJavaMailComponent},
    {path: 'web', component: SpringWebComponent},
    {path: 'security', component: SpringSecurityComponent},
    {path: 'springboot', component: SpringBootComponent},
    {path: 'angular', component: SpringNAngularComponent}
  ]
}];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);


@NgModule({
  declarations: [
    SpringFrameworkComponent,
    SpringOverviewComponent,
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
    SpringWebComponent,
    SpringSecurityComponent,
    SpringBootComponent,
    SpringNAngularComponent
  ],
  imports: [
    CommonModule,
    Routing
  ]
})


export class SpringModuleModule { }
