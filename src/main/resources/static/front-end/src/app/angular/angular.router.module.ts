import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';


import { LazyLoaderComponent } from './lazy-loader/lazy-loader.component';
import {AngularComponent} from './angular.component';
import {AngularServiceComponent} from './angular-service/angular-service.component';
import {AngularDataArchitectureComponent} from './angular-data-architecture/angular-data-architecture.component';
import {AngularBasicComponent} from './angular-basic/angular-basic.component';
import {AngularTestingComponent} from './angular-testing/angular-testing.component';
import {AngularBoostrapComponent} from './angular-boostrap/angular-boostrap.component';
import {NgBootstrapComponentComponent} from './ng-bootstrap-component/ng-bootstrap-component.component';
import {AngularRouterComponent} from './angular-router/angular-router.component';
import {AngularCoreComponent} from './angular-core/angular-core.component';
import {AngularCompComponent} from './angular-comp/angular-comp.component';
import {AngularInputComponent} from './angular-input/angular-input.component';
import {AngularFormComponent} from './angular-form/angular-form.component';
import {IncrementalDomInAngularComponent} from './incremental-dom-in-angular/incremental-dom-in-angular.component';


const routes: Routes = [{
  path: '',
  component: AngularComponent,
  children: [
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
    {path: 'ng-lazy-loader', component: LazyLoaderComponent},
    {path: 'ng-dom', component: IncrementalDomInAngularComponent},
    {path: 'ng-data-architecture', component: AngularDataArchitectureComponent},
    {path: 'ng-testing', component: AngularTestingComponent},
    { path: '**', redirectTo: 'basic' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRouterModule { }
