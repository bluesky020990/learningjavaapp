import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';

import {AngularRouterComponent} from './components/resource/angular-resources/angular-router/angular-router.component';
import {AngularRouterAdvanceComponent} from './components/resource/angular-resources/angular-router-advance/angular-router-advance.component';
import {AngularBoostrapComponent} from './components/resource/angular-resources/angular-boostrap/angular-boostrap.component';
import {NgBootstrapComponentComponent} from './components/resource/angular-resources/ng-bootstrap-component/ng-bootstrap-component.component';

import {AngularCompComponent} from './components/resource/angular-resources/angular-comp/angular-comp.component';
import {AngularInputComponent} from './components/resource/angular-resources/angular-input/angular-input.component';
import {IncrementalDomInAngularComponent} from './components/resource/angular-resources/incremental-dom-in-angular/incremental-dom-in-angular.component';
import {AngularServiceComponent} from './components/resource/angular-resources/angular-service/angular-service.component';
import {AngularDataArchitectureComponent} from './components/resource/angular-resources/angular-data-architecture/angular-data-architecture.component';
import {AngularFormComponent} from './components/resource/angular-resources/angular-form/angular-form.component';
import {AngularTestingComponent} from './components/resource/angular-resources/angular-testing/angular-testing.component';


import {AngularResourcesComponent} from './components/resource/angular-resources/angular-resources.component';
import {AngularCoreComponent} from './components/resource/angular-resources/angular-core/angular-core.component';
import {AngularBasicComponent} from './components/resource/angular-resources/angular-basic/angular-basic.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'angular', component: AngularResourcesComponent,
    children: [
      {path: '', redirectTo: 'basic', pathMatch: 'full'},
      {path: 'ng-core', component: AngularCoreComponent},
      {path: 'ng-basic', component: AngularBasicComponent},
      {
        path: 'ng-component',
        children: [
          {path: '', component: AngularCompComponent},
          {path: 'view-person/:id', component: AngularInputComponent}
        ]
      },
      {path: 'ng-service', component: AngularServiceComponent},
      {path: 'ng-form', component: AngularFormComponent},
      {path: 'bootstrap', component: AngularBoostrapComponent},
      {path: 'ng-bootstrap', component: NgBootstrapComponentComponent},
      {path: 'router', component: AngularRouterComponent},
      {path: 'router-advance', component: AngularRouterAdvanceComponent},
      {path: 'ng-dom', component: IncrementalDomInAngularComponent},
      {path: 'ng-data-architecture', component: AngularDataArchitectureComponent},
      {path: 'ng-testing', component: AngularTestingComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
