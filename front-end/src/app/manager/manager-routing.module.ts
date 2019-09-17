import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ManagerComponent} from "./manager.component";

const routes: Routes = [
  { path: '', component: ManagerComponent, children: [
      { path: '', redirectTo: '/angular', pathMatch: 'full'},
      { path: 'angular',         loadChildren: 'src/app/angular/angular.module#AngularModule'},
      { path: 'java',            loadChildren: 'src/app/java/java.module#JavaModule'},
      { path: 'design-pattern',  loadChildren: 'src/app/design-pattern/design-pattern.module#DesignPatternModule'},
      { path: 'micro-service',   loadChildren: 'src/app/micro-service/micro-service.module#MicroServiceModule'},
      { path: 'spring',          loadChildren: 'src/app/spring-framework/spring-module.module#SpringModuleModule'},
    ]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ManageRoutingModule { }
