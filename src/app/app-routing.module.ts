import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AngularResourcesComponent} from './components/resource/angular-resources/angular-resources.component';
import {AngularRouterComponent} from './components/resource/angular-resources/angular-router/angular-router.component';
import {AngularRouterAdvanceComponent} from './components/resource/angular-resources/angular-router-advance/angular-router-advance.component';
import {AngularBoostrapComponent} from './components/resource/angular-resources/angular-boostrap/angular-boostrap.component';
import {NgBootstrapComponentComponent} from './components/resource/angular-resources/ng-bootstrap-component/ng-bootstrap-component.component';
import {AngularBasicComponent} from './components/resource/angular-resources/angular-basic/angular-basic.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'angular', component: AngularResourcesComponent,
    children: [
      {path: '', redirectTo: 'basic', pathMatch: 'full'},
      {path: 'basic', component: AngularBasicComponent},
      {path: 'bootstrap', component: AngularBoostrapComponent},
      {path: 'ng-bootstrap-component', component: NgBootstrapComponentComponent},
      {path: 'router', component: AngularRouterComponent},
      {path: 'router-advance', component: AngularRouterAdvanceComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
